import Image from 'next/image'
import React from 'react'

const Navbar = () => {
return (
    <div className='bg-white'>
        <Image src='/logo.png' alt='Logo' width={120} height={50} className='h-[20vh] rounded-b-lg' />
    </div>
)
}

export default Navbar