import React from 'react'
import { ImCheckmark } from "react-icons/im";

const About = () => {
  return (
    <div className='page-width mt-5 ' id='home-page'>
        <h3 className=' text-customDark text-4xl font-semibold'>Putting our investors first is Key</h3>
            <p className='text-xl text-textMuted mt-3'>We are committed to providing all our investors with exceptional service while offering our team the best training.</p>

            <p className='mt-5'>
            TheFipTrades is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
            </p>
            <p className='mt-10 lg:w-8/12 mg:w-10/12'>
            We're here to create a cost-effective trading experience where Forex traders, new and professional, can earn more with the same investment. While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use platform.
            </p>

            <div className='lg:w-8/12 mg:w-10/12 grid grid-cols-2 mt-5 gap-5'>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> 200x leverage trading</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Committed to forex education</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Low Fees</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Competitve commissions</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Fully Transparent</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Functional customer support</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Technology for your benefits</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Instant effect</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Trading Around the Clock</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Intuitive platform</p>
            
            </div>

            <div className='lg:w-8/12 mg:w-10/12 flex items-center justify-between mt-10 mb-16 flex-wrap gap-5 md:gap-0'>
                <div className='md:w-1/2'>
                <h3 className=' text-customDark text-5xl font-bold '>Our multi-asset investment approach is aimed at what matters.</h3>
                </div>
                <div className='md:w-1/2 flex flex-col gap-10'>
                    <div className='flex items-center gap-3'>
                        <span className=' text-customOrange font-extrabold text-4xl border-b pb-2'>34k+</span>
                        <span className=' text-customDark text-3xl font-bold'>Registered members</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className=' text-customOrange font-extrabold text-4xl border-b pb-2'>9534+</span>
                        <span className=' text-customDark text-3xl font-bold'>Ongoing Trades</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className=' text-customOrange font-extrabold text-4xl border-b pb-2'>16455+</span>
                        <span className=' text-customDark text-3xl font-bold'>Online members</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className=' text-customOrange font-extrabold text-4xl border-b pb-2'>5m+</span>
                        <span className=' text-customDark text-3xl font-bold'>Total payouts</span>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default About