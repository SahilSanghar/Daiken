import Image from 'next/image'
import React from 'react'

const IconWithCaption = () => {
return (
    <div className="flex flex-row justify-between gap-4 p-4">
    <div className="flex flex-col items-center">
        <Image src='/i1.png' alt='icon' height={40} width={40} />
        <p className="mt-2">Help</p>
    </div>
    <div className="flex flex-col items-center">
        <Image src='/i2.png' alt='icon' height={40} width={40} />
        <p className="mt-2">App</p>
    </div>
    <div className="flex flex-col items-center">
        <Image src='/i3.png' alt='icon' height={40} width={40} />
        <p className="mt-2">Services</p>
    </div>
    <div className="flex flex-col items-center">
        <Image src='/i4.png' alt='icon' height={40} width={40} />
        <p className="mt-2">Invite</p>
    </div>
    </div>
)
}

export default IconWithCaption
