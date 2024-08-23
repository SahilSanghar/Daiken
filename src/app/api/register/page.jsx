// pages/api/register.js
import { auth } from '../firebaseadmin';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default async function handler(req, res) {
    if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
} else {
    res.status(405).json({ message: 'Method not allowed' });
}
}
