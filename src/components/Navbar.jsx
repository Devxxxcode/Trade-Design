import React, { useState } from 'react'
import logo from "../assest/thefiptrades logo.svg"
import { MenuCustomList } from './NavbarDropDown'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavbarAccordion } from './NavbarAccordion';
import { FaSignInAlt } from "react-icons/fa";
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();
  return (
   <div>
     <div className='page-width'>
        <div className='flex justify-between h-[10vh] items-center '>
            <h1 className='w-1/5'>
            <Link to={"/"}><img src={logo} alt="" className='h-6.5rem md:h-[4rem]'/> </Link>
            </h1>
            <div className='w-3/5 lg:block hidden'>
                <ul className='flex justify-between items-center'>
                    <li className={ `text-gray-600 hover:opacity-75 cursor-pointer ${location.pathname === '/' && "!text-customOrange"}`}><Link to={"/"}>Home</Link></li>
                    <li className={` text-gray-600 hover:opacity-75 cursor-pointer ${location.pathname === '/about' && "!text-customOrange"}`}><Link to={"/about"}>About</Link></li>
                    {/* <li className=' text-gray-600 hover:opacity-75 cursor-pointer`}>Market</li> */}
                    <li><MenuCustomList/></li>
                    <li className={` text-gray-600 hover:opacity-75 cursor-pointer ${location.pathname === '/commondities' && "!text-customOrange"}`}><Link to={"/commondities"}>commodites</Link></li>
                    <li className={` text-gray-600 hover:opacity-75 cursor-pointer ${location.pathname === '/indices' && "!text-customOrange"}`}><Link to={"/indices"}>indices</Link></li>
                    <li>
                        <div className='flex border-[1px] border-customOrange p-3 rounded-md items-center'>
                            <div className='text-sm text-customOrange border-r px-3 h-3 flex items-center  border-r-customOrange font-semibold  cursor-pointer' ><Link to={"/login"}>LOGIN </Link></div>
                            <div className='text-sm text-customOrange px-3  cursor-pointer h-3 flex items-center font-semibold  ' ><Link to={"/signup"}>SIGN UP</Link></div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='lg:hidden'>
                {hamburger?<IoClose onClick={()=>{setHamburger((cur)=>!cur)}}/>:<GiHamburgerMenu className=' text-customOrange text-2xl' onClick={()=>{setHamburger((cur)=>!cur)}}/>}
            </div>
            {hamburger && (
                <div className='page-width !overflow-hidden h-screen w-screen'>
                <div className='fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-screen backdrop-blur-3xl z-20 flex items-center !overflow-hidden' >
                <IoClose className=' text-customOrange text-5xl absolute top-0 right-0 m-3 border-2 rounded-lg border-textMuted hover:scale-105' onClick={()=>{setHamburger((cur)=>!cur)}}/>
                <ul className='flex flex-col gap-5 pl-10'>
                <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/' && "!text-customOrange"}`}><Link to={"/"} onClick={()=>{setHamburger((cur)=>!cur)}}>Home</Link></li>
                    <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/about' && "!text-customOrange"}`}><Link to={"/about"} onClick={()=>{setHamburger((cur)=>!cur)}}>About</Link></li>
                    <li><NavbarAccordion/></li>
                    <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/commondities' && "!text-customOrange"}`}><Link to={"/commondities"} onClick={()=>{setHamburger((cur)=>!cur)}}>commodites</Link></li>
                    <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/indices' && "!text-customOrange"}`}><Link to={"/indices"} onClick={()=>{setHamburger((cur)=>!cur)}}>indices</Link></li>
                    <li>
                    <Link to={"/login"}><button className=' bg-customOrange w-[20rem] py-2 text-white rounded-md font-semibold' onClick={()=>{setHamburger((cur)=>!cur)}}><span className='flex  justify-center items-center gap-3 '>LOGIN <FaSignInAlt className='text-md'/></span></button></Link>
                    </li>
                    <li>
                    <Link to={"/login"}> <button className='bg-customDark w-[20rem] py-2 text-white rounded-md font-semibold' onClick={()=>{setHamburger((cur)=>!cur)}}><span className='flex  justify-center items-center gap-3 '>SIGN UP <FaSignInAlt className='text-md'/></span></button></Link>
                    </li>
                </ul>
                </div>
            </div>
            )}
        </div>
    </div>
    <hr />
   </div>
  )
}

export default Navbar