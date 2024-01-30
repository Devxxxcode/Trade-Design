import React from 'react'
import Navbar from '../components/Navbar'
import { CarouselWithContent } from '../components/Carosel'
import { FaEuroSign } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaTint } from "react-icons/fa";
import { FaCube } from "react-icons/fa6";
import background1 from "../assest/in-profit-decor-1.svg"
import background2 from "../assest/in-profit-decor-2.svg"
import icon1 from "../assest/in-profit-icon-1.svg"
import icon2 from "../assest/in-profit-icon-2.svg"
import icon3 from "../assest/in-profit-icon-3.svg"
import icon4 from "../assest/in-profit-icon-4.svg"
import icon5 from "../assest/in-profit-icon-5.svg"
import icon6 from "../assest/in-profit-mockup-2.png"
import Footer from '../components/Footer';


const Home = () => {

    const backgroundStyle = {
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top 50px right -150px' ,
        backgroundRepeat: 'no-repeat'
      };
    const backgroundStyle2 = {
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top 50px right -300px' ,
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div id='home-page'>
        <CarouselWithContent/>
        <div className='bg-[#e9e8f0] py-16'>
            <div  className='page-width'>
                <div className="flex flex-col gap-4 lg:flex-row">
                <div className="flex flex-col gap-4 lg:w-2/6 lg:border-r border-textColor/50 text-center lg:text-start">
                    <h3 className='text-4xl font-semibold text-customDark'>Trading products</h3>
                    <p>Choose from 6 asset classes and get access to 500+ trading instruments</p> 
                </div>

                <div className='w-4/6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-auto' >
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaEuroSign  size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Forex</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaBitcoin  size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Crypto</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaChartArea  size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Indexes</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaFileAlt  size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Stocks</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaTint  size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Energy</p>
                    </div>
                    <div className='flex flex-col gap-3 justify-center items-center '>
                        <div className=' rounded-full bg-white h-[5em] w-[5em] grid place-content-center shadow-md' >
                        <FaCube size="2em" color="#fd6a4f"/>
                        </div>
                        <p className='font-bold'>Commodities</p>
                    </div>

                </div>
                </div>
            </div>
        </div>

        <div className='text-center mt-16 page-width'>
            <h3 className=' text-customDark text-4xl font-semibold'>Putting our investors first is Key</h3>
            <p className='text-xl text-textMuted'>We are committed to providing all our investors with exceptional service while offering our team the best training.</p>

            <p className='mt-5'>
            TheFipTrades is an International online broker that has been actively operating in the Crypto & Stocks Trading trading markets. With our advanced, web-based trading platform, you can trade on the largest lists of assets in the industry. From Currency pairs, and Commodities to stocks and indices, we have it all. Keep your trading costs down with competitive spreads, commissions and low margins. View spreads on our most popular cash instruments.
            </p>

            <h3 className=' text-customDark text-4xl font-semibold mt-16'>Experience more than Trading.</h3>
            <p className='text-xl text-textMuted'>We follow a very strict and disciplined process for investment, as we are aware, that we are dealing with our client’s funds. Investment means a lot to us, and we respect the trust of our clients.</p>

            <div className='flex w-10/12 mx-auto mt-10 flex-wrap text-start gap-10'>
                <div className='lg:w-1/3 p-10 border-[#d5cee0] border-2 rounded-lg flex-grow  bg-[#f7f6fc]'  style={backgroundStyle}>
                    <div className='border-l-8 border-customOrange pl-3'>
                        <h3 className=' text-customDark text-4xl font-semibold'>Economic</h3>
                        <p>Analysis</p>
                    </div>
                    <p className='mt-5'>Stay ahead of the markets with world-leading market analysis. Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                </div>
                <div className='lg:w-1/3 p-10 border-[#d5cee0] border-2 rounded-lg flex-grow bg-[#f7f6fc]'   style={backgroundStyle2}>
                    <div className='border-l-8 border-customOrange pl-3'>
                        <h3 className=' text-customDark text-4xl font-semibold'>Technical</h3>
                        <p>Analysis</p>
                    </div>
                    <p className='mt-5'>Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.</p>
                </div>
                <div className='lg:w-1/3 p-10 border-[#d5cee0] border-2 rounded-lg flex-grow bg-[#f7f6fc]'>
                    <div className='border-l-8 border-customOrange pl-3'>
                        <h3 className=' text-customDark text-4xl font-semibold'>Stock</h3>
                        <p>Analysis</p>
                    </div>
                    <p className='mt-5'>Stay ahead of the markets with world-leading market analysis. Keep your trading costs down with competitive spreads, commissions and low margins.</p>
                </div>
            </div>
        </div>

        <div className='bg-[#01123c] mt-16'>
            <div className='page-width py-16'>
           <div className='lg:w-4/12'>
           <h3 className=' text-white text-3xl font-semibold'>ACCESS TO OUR FINANCIAL<br/> MARKETS</h3>
           <p className='mt-3 !text-white/75'>Bitcoin is the first decentralized digital money. This cryptocurrency was created in 2009. It was originally mentioned on October 31, 2008 when a person who calls himself Satoshi Nakamoto and who is considered to be a founder of Bitcoin published an article under the title Bitcoin: A Peer-to-Peer Electronic Cash System. Bitcoin gave a start to the whole new era of cryptocurrencies. Subsequently, the first block and the first 50 bitcoins were generated. In 2016 and 2017, trading bitcoins has been growing quite popular with retail traders and major investors. The leading trading floors such as CME Group and CBOE Global Markets have already introduced trading futures on bitcoins. .</p>
           </div>

           <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-7'>
            <div className='flex flex-col gap-4 '>
                <div className=' text-customOrange pl-5 text-4xl font-[900] border-l-8 border-customDark'>9543+</div>
                <div className='text-white/75'>Ongoing Trades</div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className=' text-customOrange pl-5 text-4xl font-[900] border-l-8 border-customDark'>34K+</div>
                <div className='text-white/75'>Registered Members</div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className=' text-customOrange pl-5 text-4xl font-[900] border-l-8 border-customDark'> 16455+</div>
                <div className='text-white/75'>Online Members</div>
            </div>
            <div className='flex flex-col gap-4'>
                <div className=' text-customOrange pl-5 text-4xl font-[900] border-l-8 border-customDark'>5M+</div>
                <div className='text-white/75'>Total Payouts</div>
            </div>
           </div>
            </div>
        </div>

        <div className='page-width'>
            <div>
            <h3 className=' text-customDark text-4xl font-semibold mt-16'>Why TheFipTrades is a trusted Crypto & Stocks Trading broker</h3>
            <p className='text-xl text-textMuted mt-3'>While existing solutions offer to solve just one problem at a time, our team is up to build a secure, useful, & easy-to-use platform.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10'>
                <div className='flex flex-col gap-4'>
                   <div>
                        <img src={icon1} alt="" className='h-[7rem]' />
                   </div>
                   <div className='border-l-8 border-textMuted pl-2 text-customDark font-bold text-2xl h-5 flex items-center'>
                        200x leverage trading
                   </div>
                   <p>
                   We have a ultra fast execution, tight spreads, and advanced platform features, we make to sure increase profitability.
                   </p>
                </div>
                <div className='flex flex-col gap-4'>
                   <div>
                        <img src={icon2} alt="" className='h-[7rem]' />
                   </div>
                   <div className='border-l-8 border-textMuted pl-2 text-customDark font-bold text-2xl h-5 flex items-center'>
                   Low Fees
                   </div>
                   <p>
                   Adoption of PPS+ and PPLNS payment methods. Transaction fees will be paid for both methods. A setup fee so low as to guarantee safety and daily profits.
                   </p>
                </div>
                <div className='flex flex-col gap-4'>
                   <div>
                        <img src={icon3} alt="" className='h-[7rem]' />
                   </div>
                   <div className='border-l-8 border-textMuted pl-2 text-customDark font-bold text-2xl h-5 flex items-center'>
                   Fully Transparent
                   </div>
                   <p>
                   Real-time and detailed data monitoring on trades, stocks and binary with clear graphical demonstration. Additional reference for users with pool data.
                   </p>
                </div>
                <div className='flex flex-col gap-4'>
                   <div>
                        <img src={icon4} alt="" className='h-[7rem]' />
                   </div>
                   <div className='border-l-8 border-textMuted pl-2 text-customDark font-bold text-2xl h-5 flex items-center'>
                   Committed to forex education
                   </div>
                   <p>
                   Our round-the-clock E-mail, Telegram and Facebook support team will respond to you at any time, any day. Even on weekends and holidays!
                   </p>
                </div>
                <div className='flex flex-col gap-4'>
                   <div>
                        <img src={icon5} alt="" className='h-[7rem]' />
                   </div>
                   <div className='border-l-8 border-textMuted pl-2 text-customDark font-bold text-2xl h-5 flex items-center'>
                   Competitve commissions
                   </div>
                   <p>
                   Reasonable fees for takers and makers, special conditions for high-volume traders, and strong offers for market makers.
                   </p>
                </div>
                <div className='flex flex-col gap-4'>
                        <img src={icon6} alt="" className='h-full w-full' />
                </div>
            </div>

            <div>
                <h3 className=' text-customDark text-4xl font-semibold my-16 text-center'>Account Types</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    <div className='flex flex-col gap-3'>
                        <div className='border-l-8 border-textMuted pl-2 text-customDark font-semibold text-xl h-4 flex items-center'>
                            STARTER
                    </div>
                        <p>✓ Trading Instruments: 36 currency pairs, Metals, Cryptocurrencies</p>
                        <p>✓ Minimum deposit: 10,000 USD / 10,000 EUR</p>
                        <p>✓ Spread: Floating from 1.3 pips</p>
                        <p>✓ Maximum leverage: 24,999</p>
                        <p>✓ Return on Investment: 187%</p>
                        <p>✓ Deposit bonuses: All offers</p>
                        <p>✓ Loyalty bonuses: All offers</p>

                        <button className=' bg-customOrange/90 w-[9rem] py-2 rounded-lg text-white hover:bg-customOrange'>Choose Plan</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='border-l-8 border-textMuted pl-2 text-customDark font-semibold text-xl h-4 flex items-center'>
                        SILVER
                    </div>
                            <p>✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies</p>
                            <p>✓ Minimum deposit: 25,000 USD / 25,000 EUR</p>
                            <p>✓ Spread: Floating from 1.3 pips</p>
                            <p>✓ Maximum : 49,999</p>
                            <p>✓ Return on Investment: 216%</p>
                            <p>✓ Deposit bonuses: All offers</p>
                            <p>✓ Loyalty bonuses: All offers</p>
                        <button className=' bg-customOrange/90 w-[9rem] py-2 rounded-lg text-white hover:bg-customOrange'>Choose Plan</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='border-l-8 border-textMuted pl-2 text-customDark font-semibold text-xl h-4 flex items-center'>
                        GOLD
                    </div>
                        <p>✓ Trading Instruments: 36 currency pairs, Metals, CFD on US stocks, CFD on Indices, CFD on Oil, Cryptocurrencies</p>
                        <p>✓ Minimum deposit: 50,000 USD / 50,000 EUR</p>
                        <p>✓ Spread: Floating from 0 pips</p>
                        <p>✓ Maximum leverage: 99,999</p>
                        <p>✓ Return on Investment: 246%</p>
                        <p>✓ Deposit bonuses: All offers</p>
                        <p>✓ Loyalty bonuses: All offers</p>

                        <button className=' bg-customOrange/90 w-[9rem] py-2 rounded-lg text-white hover:bg-customOrange'>Choose Plan</button>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <div className='border-l-8 border-textMuted pl-2 text-customDark font-semibold text-xl h-4 flex items-center'>
                        PLATINUM
                    </div>
                        <p>✓ Trading Instruments: More than 12,000: Indices, Real stocks, CFD on stocks, Forex and ETF, CFDs on Oil, CFDs on Metals, CFDs on Brazil Stocks, Cryptocurrencies</p>
                        <p>✓ Minimum deposit: 150,000 USD / 150,000 EUR</p>
                        <p>✓ Spread: Floating from 0.01 USD</p>
                        <p>✓ Maximum leverage: 1,000,000</p>
                        <p>✓ Return on Investment: 301%</p>
                        <p>✓ Deposit bonuses: All offers</p>
                        <p>✓ Loyalty bonuses: All offers</p>

                        <button className=' bg-customOrange/90 w-[9rem] py-2 rounded-lg text-white hover:bg-customOrange'>Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-[#e9e8f0] py-16 mt-16'>
            <div className='page-width md:w-10/12 lg:w-8/12 text-center'>
                <p className='text-2xl'>Start trading with TheFipTrades</p>
                <h3 className=' text-customDark text-4xl font-semibold mt-3 text-center'>Fast account opening in 3 simple steps</h3>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10 text-start'>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='h-[5rem] w-[5rem] bg-customOrange rounded-full grid place-content-center text-3xl text-white font-bold'>1</div>
                        <div className='text-2xl text-customDark font-bold'> Register </div>
                        <p className='text-center'>Create an account today on our trading platform</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='h-[5rem] w-[5rem] bg-customOrange rounded-full grid place-content-center text-3xl text-white font-bold'>2</div>
                        <div className='text-2xl text-customDark font-bold'> Fund </div>
                        <p className='text-center'>Fund your account using a wide range of funding methods.</p>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <div className='h-[5rem] w-[5rem] bg-customOrange rounded-full grid place-content-center text-3xl text-white font-bold'>3</div>
                        <div className='text-2xl text-customDark font-bold'> Trade </div>
                        <p className='text-center'>Access 180+ instruments across all asset classes inside the platform</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-10 lg:divide-x divide-black/25 divide-y md:divide-y-0 '>
                        <div className='flex flex-col gap-3 px-3'>
                            <h3 className=' text-customDark text-4xl font-semibold mt-3 text-center'>&lt;7.12 ms</h3>
                            <small className=' text-customOrange'>AVERAGE ORDER EXECUTION SPEED</small>
                        </div>
                        <div className='flex flex-col gap-3 px-3'>
                            <h3 className=' text-customDark text-4xl font-semibold mt-3 text-center'>12+</h3>
                            <small className=' text-customOrange'>INTEGRATED LIQUIDITY PROVIDERS</small>
                        </div>
                        <div className='flex flex-col gap-3 px-3'>
                            <h3 className=' text-customDark text-4xl font-semibold mt-3 text-center'>&gt;
 12,000</h3>
                            <small className=' text-customOrange'>EXECUTED ORDERS PER SECOND</small>
                        </div>
                        <div className='flex flex-col gap-3 px-3'>
                            <h3 className=' text-customDark text-4xl font-semibold mt-3 text-center'>$545 k</h3>
                            <small className=' text-customOrange'>AVERAGE TRADING VOLUME PER DAY</small>
                        </div>
                </div>

                <div className='flex flex-col justify-center mt-10 gap-4'>
                    <button className=' bg-customOrange/90 w-[18rem] rounded-md mx-auto text-white text-lg py-2 hover:bg-customOrange'>Setup your trading account</button>
                    <p>Registration takes only 40 seconds!</p>
                </div>
            </div>
        </div>

        <div className='page-width my-16'>
            <div className='flex md:w-10/12 lg:w-8/12 mx-auto flex-wrap gap-5 items-center'>
                <div  className='md:w-4/12 text-customDark text-3xl font-bold'>Connect to global capital markets</div>
                <p className='md:w-7/12 text-xl'>Trade Binary Options with the best platform, on a wide selection of assets, with high payouts, lightning-fast order execution and get personal customer support around the clock, fast withdrawals and the expertise of industry leaders.</p>
            </div>
        </div>
    </div>
  )
}

export default Home