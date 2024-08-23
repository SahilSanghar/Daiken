// pages/api/login.js
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { serialize } from 'cookie';

export default async function handler(req, res) {
    if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        const token = await user.getIdToken();
        res.setHeader('Set-Cookie', serialize('token', token, { path: '/', httpOnly: true }));

        res.status(200).json({ message: 'User logged in successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} else {
    res.status(405).json({ message: 'Method not allowed' });
}
}
