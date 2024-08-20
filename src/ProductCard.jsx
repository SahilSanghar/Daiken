import Image from 'next/image'
import React from 'react'
import { ProductData } from '../data/ProductData'

const ProductCard = () => {
return (
    <div className='grid grid-cols-1 bg-sky-600 text-white border-4 border-white'>
    <div className="flex m-2 p-3 border-2 border-white rounded-md">
        <div className="">
            <Image src="/fan.jpeg" alt="fan" width={100} height={50} className='rounded-md'  />
        </div>
        <div className="ps-5">
            <p>
                Electric fan 
            </p>
            <p>
                Price: <span>600 Rs</span>
            </p>
            <p>
                Daily income: <span>27.75 Rs</span>
            </p>
            <p>
                Validity period: <span>40 Days</span>
            </p>
            <p>
                Total income: <span>1110 Rs</span>
            </p>
            <button className='bg-white text-black px-20 py-1 rounded-md mt-3'>View</button>
        </div>
    </div>

    </div>
)
}

export default ProductCard