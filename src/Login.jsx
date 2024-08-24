"use client"
import React from 'react';
import { useRouter } from 'next/navigation'; 
import Image from 'next/image';

const LoginForm = () => {
const router = useRouter();

const handleRegisterClick = () => {
    router.push('/register');
};

const handleForgotPasswordClick = () => {
    router.push('/forgot-password');
};

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
    <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
        <div className="mb-4">
            <label className="flex">
                <Image src='/acc.svg' alt='account number' width={20} height={20} className='mr-2' />
                Account Number</label>
            <input
                type="text"
                placeholder="Enter your account number"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            />
        </div>
        <div className="mb-6">
            <label className="flex">
                <Image src='/pass.svg' alt='password' width={20} height={20} className='mr-2' />
                Password</label>
            <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 text-black focus:ring-blue-500"
            />
        </div>
        <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
            Login
        </button>
        </form>
        <div className="flex justify-between items-center mt-4">
        <span className="">Don't have an account?</span>
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

export default LoginForm;
