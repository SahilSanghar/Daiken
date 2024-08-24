// app/api/login/route.js (for Next.js 13.4+ with app directory)
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { accountNumber, password } = await request.json();
        
        // Replace this with your actual authentication logic
        if (!accountNumber || !password) {
            return NextResponse.json({ error: 'Account number and password are required' }, { status: 400 });
        }

        // Example static check (replace with database check)
        if (accountNumber === 'user' && password === 'password') {
            return NextResponse.json({ message: 'Login successful' });
        } else {
            return NextResponse.json({ error: 'Invalid account number or password' }, { status: 401 });
        }
    } catch (error) {
        return NextResponse.json({ error: 'An error occurred during login' }, { status: 500 });
    }
}
