"use client"
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation'

const Footer = () => {
    const router = useRouter()

    const handleNavigation = (path) => {
        router.push(path)
    }

    return (
        <div className="flex flex-row justify-between bg-sky-600 text-white gap-2 py-5">
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleNavigation('/')}
            >
                <Image src='/f1.png' alt='icon' height={40} width={40} />
                <p className="mt-2">Help</p>
            </div>
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleNavigation('/product')}
            >
                <Image src='/f2.png' alt='icon' height={40} width={40} />
                <p className="mt-2">App</p>
            </div>
            <div
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleNavigation('/login')}
            >
                <Image src='/f3.png' alt='icon' height={40} width={40} />
                <p className="mt-2">Services</p>
            </div>
        </div>
    )
}

export default Footer
