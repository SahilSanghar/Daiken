"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { auth, database, ref, get, onAuthStateChanged } from '../data/firebaseadmin'; // Adjust the path as necessary

const Dashboard = () => {
    const [accountNumber, setAccountNumber] = useState(null);
    const [balance, setBalance] = useState(0); // Example state for wallet balance
    const [points, setPoints] = useState(0); // Example state for POINT-S

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        // Fetch user data from Realtime Database
                        const userRef = ref(database, `users/${user.uid}`);
                        const snapshot = await get(userRef);
                        
                        if (snapshot.exists()) {
                            const userData = snapshot.val();
                            setAccountNumber(userData.accountNumber);
                            setBalance(userData.balance || 0); // Assuming user data contains balance
                            setPoints(userData.points || 0); // Assuming user data contains points
                        } else {
                            console.error('No data available for the user.');
                        }
                    } else {
                        console.log('No user is signed in');
                    }
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className='m-5 p-5 bg-white text-black rounded-lg'>
            <div className="flex items-center">
                <Image src='/account.png' alt='account' width={30} height={30} />
                <p>
                    {accountNumber ? accountNumber : 'Loading...'}
                </p>
            </div>
            <div className="flex justify-between items-center text-center my-5">
                <div className="text-sm pb-5">
                    Recharge wallet
                </div>
                <div className="">
                    <p className='font-bold'>{balance}</p>
                    <p>Balance wallet</p>
                </div>
                <div className="">
                    <p className='font-bold'>{points}</p>
                    <p>POINT-S</p>
                </div>
            </div>
            <div className="flex justify-around text-white">
                <button className='flex items-center bg-yellow-500 px-10 py-2 rounded-3xl'>
                    <Image src='/recharge.png' alt='Recharge' width={20} height={20} className='mr-2' />
                    Recharge
                </button>
                <button className='flex items-center bg-yellow-500 px-10 py-2 rounded-3xl border-[1.5px] border-black'>
                    <Image src='/withdraw.png' alt='Withdraw' width={20} height={20} className='mr-2' />
                    Withdraw
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
