"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

const Login = () => {
    const router = useRouter();
    const [accountNumber, setAccountNumber] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRegisterClick = () => {
        router.push('/register');
    };

    const handleForgotPasswordClick = () => {
        router.push('/forgot-password');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ accountNumber, password }),
            });
            
            // Check if the response is JSON
            const contentType = response.headers.get('Content-Type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json();
            }

            if (response.ok) {
                alert('Login successful!');
                router.push('/account');
            } else {
                alert(`Error: ${data.error || 'Login failed'}`);
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Failed to log in. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="flex">
                            <Image src='/acc.svg' alt='account number' width={20} height={20} className='mr-2' />
                            Account Number
                        </label>
                        <input
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            placeholder="Enter your account number"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="flex">
                            <Image src='/pass.svg' alt='password' width={20} height={20} className='mr-2' />
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                <div className="flex justify-between items-center mt-4">
                    <span>Don't have an account?</span>
                    <button
                        onClick={handleRegisterClick}
                        className="text-blue-500 hover:underline"
                    >
                        Register
                    </button>
                </div>
                <a
                    onClick={handleForgotPasswordClick}
                    className="block text-center text-blue-500 hover:underline mt-4 cursor-pointer"
                >
                    Forgot password?
                </a>
            </div>
        </div>
    );
};

export default Login;
