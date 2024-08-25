import dbConnect from '../../lib/mongodb';
import User from '../../model/user';
import bcrypt from 'bcrypt';
import { serialize } from 'cookie';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { accountNumber, password } = await request.json();

        if (!accountNumber || !password) {
            return NextResponse.json({ error: 'Account number and password are required' }, { status: 400 });
        }

        await dbConnect();

        // Find the user by accountNumber
        const user = await User.findOne({ mobileNumber: accountNumber });
        if (!user) {
            return NextResponse.json({ error: 'Invalid account number or password' }, { status: 401 });
        }

        // Check the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid account number or password' }, { status: 401 });
        }

        // Set a cookie for user session
        const response = NextResponse.json({ message: 'Login successful' });
        const cookie = serialize('authToken', 'your-token-here', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        response.headers.set('Set-Cookie', cookie);
        return response;
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
    }
}
