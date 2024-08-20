import Image from 'next/image'
import React from 'react'

const Body = () => {
return (
    <div className=''>
        <p className=''>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ----- WHY CHOOSE US -----
        </p>
        <p className='py-5'>
            The mission of Daikin is to develop and sell high-quality industrial AC products through a continuous research process, adhering to company policies that ensure the well-being of our employees, protect the environment, and pursue economic profitability. Our vision is to be a globally recognized leader in the production, innovation, and export of sustainable industrial AC solutions. We aim to be a business unit that prioritizes human development and financial integration, meeting the highest standards of quality and innovation to satisfy our customers, employees, workers, and communities.
        </p>
        <Image src='/c1.png' alt='image' height={20} width={500} className='' />
        <p className='py-5'>
            Respect everyone, their culture, and their habitat; value individual differences and potential to ensure fair and equitable growth for employees, partners, communities, and customers.
        </p>
        <Image src='/c2.jpg' alt='image' height={20} width={500} />
        <p className='py-5'>
            We believe that sustainability is not only about meeting the needs of our generation without compromising the future. Through economically viable, environmentally sustainable, and socially responsible production systems, we are committed to contributing to the prosperity of future generations.
        </p>
        <Image src='/c3.jpg' alt='image' height={20} width={500} />
        <p className='py-5'>
            By ensuring an efficient and sustainable production cycle through the integration of the entire operation—from development to sales—we guarantee product quality, reduce waste and pollution, and promote the reuse of waste for the production of biofuels and renewable energy. Achieving our goals is the result of working hand-in-hand with our people, investing the necessary time, and excelling at what we love most.
        </p>
        <Image src='/img.png' alt='image' height={20} width={500} />
    </div>
)
}

export default Body