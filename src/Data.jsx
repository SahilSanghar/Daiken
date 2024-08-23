import React from 'react'

const Data = () => {
return (
    <div className='m-5 p-5 bg-white text-black rounded-lg'>
        <div className="flex justify-around text-center my-3">
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Total recharge</p>
            </div>
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Total withdraw</p>
            </div>
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Total assets</p>
            </div>
        </div>
        <div className="flex justify-around text-center my-3">
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Today's income</p>
            </div>
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Team income</p>
            </div>
            <div className="">
                <p className="font-bold">0</p>
                <p className="">Total income</p>
            </div>
        </div>
    </div>
)
}

export default Data