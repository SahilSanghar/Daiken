"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { database } from '../../../data/firebaseadmin'; // Adjust the path as necessary

const BankAccountForm = () => {
    const [formData, setFormData] = useState({
        accountHolder: '',
        bankName: '',
        accountNumber: '',
        branch: '',
        ifsc: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const [loading, setLoading] = useState(false);
    const [userMobileNumber, setUserMobileNumber] = useState('');

    useEffect(() => {
        const fetchUserMobileNumber = async () => {
            try {
                // Replace 'user-id' with the actual user's ID or authentication method
                const userId = 'user-id'; 
                const userRef = database.ref(`users/${userId}/mobileNumber`); // Adjust the path to where mobile number is stored
                userRef.once('value', (snapshot) => {
                    const data = snapshot.val();
                    if (data) {
                        setUserMobileNumber(data);
                    } else {
                        console.error('No data available for user');
                    }
                });
            } catch (error) {
                console.error('Error fetching user mobile number:', error);
            }
        };

        fetchUserMobileNumber();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/saveBankDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Bank details saved successfully');
            } else {
                alert('Failed to save bank details');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error occurred while saving bank details');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <div className="bg-gray-700 p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">Bank Account Details</h2>
                <form onSubmit={handleSubmit}>
                    {/* Account Holder Name */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="accountHolder"
                            value={formData.accountHolder}
                            onChange={handleChange}
                            placeholder="Cardholder name"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Bank Name */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            placeholder="Bank name"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Bank Account Number */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            placeholder="Bank Account"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* IFSC Code */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="ifsc"
                            value={formData.ifsc}
                            onChange={handleChange}
                            placeholder="IFSC"
                            className="w-full text-black px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Saving...' : 'Save Details'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BankAccountForm;
