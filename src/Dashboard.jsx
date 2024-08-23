import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
return (
    <div className='m-5 p-5 bg-white text-black rounded-lg'>
        <div className="flex items-center">
            <Image src='/account.png' alt='account' width={30} height={30} />
            <p>
                6351328842
            </p>
        </div>
        <div className="flex justify-between items-center text-center my-5">
            <div className="text-sm pb-5">
                Recharge wallet
            </div>
            <div className="">
                <p className='font-bold'>0</p>
                <p>Balance wallet</p>
            </div>
            <div className="">
                <p className='font-bold'>0</p>
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
)
}

export default Dashboard