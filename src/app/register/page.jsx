"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Register = () => {
    const router = useRouter();
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [invitationCode, setInvitationCode] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const handleLoginClick = () => {
        router.push('/login');
    };

    const handleSendCodeClick = () => {
        // Implement verification code sending logic here
        alert('Verification code sent!');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mobileNumber,
                    password,
                    invitationCode,
                    verificationCode,
                }),
            });

            if (response.ok) {
                alert('Registration successful!');
                router.push('/login');
            } else {
                const data = await response.json();
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="flex">
                            <Image src='/acc.svg' alt='mobile number' width={20} height={20} className='mr-2' />
                            Mobile Number
                        </label>
                        <input
                            type="text"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            placeholder="Enter your mobile number"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex">
                            <Image src='/pass.svg' alt='password' width={20} height={20} className='mr-2' />
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex">
                            <Image src='/pass.svg' alt='confirm password' width={20} height={20} className='mr-2' />
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="flex">
                            <Image src='/inv.svg' alt='invitation code' width={20} height={20} className='mr-2' />
                            Invitation Code
                        </label>
                        <input
                            type="text"
                            value={invitationCode}
                            onChange={(e) => setInvitationCode(e.target.value)}
                            placeholder="Enter your invitation code"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="flex">
                            <Image src='/ver.svg' alt='verification code' width={20} height={20} className='mr-2' />
                            Verification Code
                        </label>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                                placeholder="Enter verification code"
                                className="flex-grow text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={handleSendCodeClick}
                                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <span>Already have an account? </span>
                    <button
                        onClick={handleLoginClick}
                        className="text-blue-500 hover:underline"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
