import Image from 'next/image'
import React from 'react'

const Footer = () => {
return (
    <div className="flex flex-row justify-between gap-4 py-5 px-10">
    <div className="flex flex-col items-center">
        <Image src='/f1.png' alt='icon' height={40} width={40} />
        <p className="mt-2">Help</p>
    </div>
    <div className="flex flex-col items-center">
        <Image src='/f2.png' alt='icon' height={40} width={40} />
        <p className="mt-2">App</p>
    </div>
    <div className="flex flex-col items-center">
        <Image src='/f3.png' alt='icon' height={40} width={40} />
        <p className="mt-2">Services</p>
    </div>
    </div>
)
}

export default Footer
