import React from 'react'
import { useNavigate } from 'react-router-dom'

const Forex = () => {
  const navigate = useNavigate()
  return (
    <div className='page-width mt-10 ' id='home-page'>
        <h3 className=' text-customDark text-5xl font-semibold'>Trade Forex with TheFipTrades and enjoy competitive spreads</h3>
        <p className='text-xl !text-textColor mt-3'>We are committed to providing all our investors with exceptional service while offering our team the best training.</p>

        <p className='mt-5'>Forex market (short for “foreign exchange”) is the largest and the most liquid financial market where the global currencies are traded. Forex traders purchase currencies with the intent to make money off of the difference between the buying and the selling prices.</p>

        <p className="mt-5">The Forex market is the largest and most liquid market in the world, trillions of dollars are changing hands every day. There is no centralized location; rather, the Forex market is an electronic network of banks, brokers, financial institutions and individual traders (mainly trading through brokers or banks).</p>

        <h3 className=' text-customDark text-3xl font-semibold mt-5'>Experience more than Trading.</h3>
        <p className='text-xl !text-textColor mt-3'>As the world’s most-traded financial market, foreign exchange presents a wealth of opportunities for those who can harness its inherent volatility.</p>
        
        <button className=' text-white bg-customOrange py-2 w-[9rem] rounded-md mt-5 mb-32 ' onClick={()=>navigate("/signup")}>Get Started</button>
    </div>
  )
}

export default Forex