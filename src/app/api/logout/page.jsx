// pages/api/logout.js
import { serialize } from 'cookie';

export default function handler(req, res) {
if (req.method === 'POST') {
    res.setHeader('Set-Cookie', serialize('token', '', { path: '/', httpOnly: true, maxAge: -1 }));
    res.status(200).json({ message: 'User logged out successfully' });
} else {
    res.status(405).json({ message: 'Method not allowed' });
}
}
