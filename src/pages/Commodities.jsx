import React from 'react'
import { ImCheckmark } from "react-icons/im";

const Commodities = () => {
  return (
    <div className='page-width mt-10 ' id='home-page'>
         <h3 className=' text-customDark text-5xl font-semibold'>The new way to trade commodities</h3>
         <p className='text-xl !text-textColor mt-3'>Commodities are the basic building blocks of the global economy. They are natural resources traded on dedicated exchanges around the world. There are two types of commodity – soft and hard. Soft commodities are typically agricultural like wheat or sugar, whereas hard commodities are metals or energies like silver and gas.</p>

         <p className='mt-5'>Our new commodity product enables you to take a short-term view on 26 key commodity markets. The new offering works in the same way as an index CFD. And just like an index position, you’ll pay a funding charge for holding your commodity position overnight.</p>

         <p className='mt-5'>As there are no fixed expiries, we are also able to offer continuous charting on these markets. This means your technical analysis will be available as long as you want it. We have used past data to backdate our charts for the last three to five years, so you can get an accurate historical look.</p>

         <div className='grid grid-cols-2 mt-5 gap-5'>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Lower spreads</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Sophisticated risk management</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Increased transparency</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Trade commodities on margin</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Continuous charting</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Low spreads on popular markets</p>
            <p className='flex gap-2 items-center' > <ImCheckmark className=' text-customOrange' /> Unique range of markets</p>
            
            </div>
        
        <p className='mt-5 mb-32'>Commodities are also generally traded as futures contracts. These are simply agreements to trade an asset at an agreed price and date in the future. This enables you to trade the contracts themselves without ever having to own the underlying asset.</p>
    </div>
  )
}

export default Commodities