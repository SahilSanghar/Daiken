import Image from 'next/image'
import React from 'react'

const Options = () => {
return (
    <div className=''>
        <ul className="border-[1px] rounded-md m-5 p-4">
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/order.png' alt='Order' width={30} height={30} />
                </div>
                <p>
                    My Order
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/transaction.png' alt='Transaction' width={30} height={30} />
                </div>
                <p>
                    Transaction
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/myacc.png' alt='myacc' width={30} height={30} />
                </div>
                <p>
                    My bank account
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/gift.png' alt='Gift' width={30} height={30} />
                </div>
                <p>
                    Gift
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/onlineSer.png' alt='Online service' width={30} height={30} />
                </div>
                <p>
                    Online service
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/team.png' alt='Team' width={30} height={30} />
                </div>
                <p>
                    My team
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
        </ul>

        <ul className="border-[1px] rounded-md m-5 p-4">
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/withpass.png' alt='Withdraw password' width={30} height={30} />
                </div>
                <p>
                    Withdraw password
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/withpass.png' alt='Change password' width={30} height={30} />
                </div>
                <p>
                    Change password
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
            <li className="flex items-center justify-between mx-5 my-3">
                <div className="bg-white rounded-full p-1">
                    <Image src='/logout.png' alt='Log Out' width={30} height={30} />
                </div>
                <p>
                    Log Out
                </p>
                <div className="text-2xl">
                    &gt;
                </div>
            </li>
        </ul>
    </div>
)
}

export default Options