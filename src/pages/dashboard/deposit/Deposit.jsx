import React from 'react'
import bitcoin from "../../../assest/bitcoin-deposit.png"
import etherumj from "../../../assest/etherum-deposit.png"
import { DepositModal } from './DepositModal'

const Deposit = () => {
    const [bitcoinOpen, setBitcoinOpen] = React.useState(false);
    const [EtherumOpen, setEtherumOpen] = React.useState(false);

  return (
    <div className=' bg-[#050d1a] w-full h-full p-5 overflow-auto' >
        <DepositModal open={bitcoinOpen} setOpen={setBitcoinOpen} method={"bitcoin"}/>
        <DepositModal open={EtherumOpen} setOpen={setEtherumOpen} method={"etherum"}/>
       <div className='grid place-content-center mx-auto mb-16'>
       <div className=' flex gap-10 flex-wrap'>
        <div className=' bg-deepBlue flex flex-col gap-4 mx-auto'>
            <img src={bitcoin} alt="" className='max-w-[15rem]' />
            <p className='text-white font-extrabold text-center text-lg'> Bitcoin</p>
            <button className=' bg-customYellow rounded-md p-3 mt-2 text-white w-11/12 mx-auto' onClick={()=>setBitcoinOpen(!bitcoinOpen)}>Pay now</button>
        </div>
        <div className=' bg-deepBlue flex flex-col gap-4 mx-auto'>
            <img src={etherumj} alt="" className='max-w-[15rem]' />
            <p className='text-white font-extrabold text-center text-lg'> Ethereum</p>
            <button className=' bg-customYellow rounded-md p-3 mt-2 text-white w-11/12 mx-auto' onClick={()=>setEtherumOpen(!EtherumOpen)}>Pay now</button>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Deposit