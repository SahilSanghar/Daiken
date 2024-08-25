import dbConnect from '../../lib/mongodb';
import User from '../../model/user';
import bcrypt from 'bcrypt';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { mobileNumber, password, invitationCode } = req.body;

        if (!mobileNumber || !password) {
            return res.status(400).json({ error: 'Mobile number and password are required' });
        }

        try {
            await dbConnect();

            // Check if user already exists
            const existingUser = await User.findOne({ mobileNumber });
            if (existingUser) {
                return res.status(400).json({ error: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user
            const newUser = new User({
                mobileNumber,
                password: hashedPassword,
                invitationCode: invitationCode || null,
            });

            await newUser.save();

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
