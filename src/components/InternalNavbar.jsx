import React, { useState } from 'react'
import logo from "../assest/thefiptrades logo.svg"
import { Link, useLocation } from 'react-router-dom'
import "../styles/internalnavbar.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavbarAccordion } from './NavbarAccordion';
import { FaSignInAlt } from "react-icons/fa";


const InternalNavbar = () => {
    const [hamburger, setHamburger] = useState(false);
    const location = useLocation();
  return (
    <div className=' bg-[#030912] lg:bg-transparent internal-navbar sticky top-0 z-50 w-full'>
        <div className=''>
            <div className='flex justify-between h-[10vh] items-center'>
                <h1 className='w-1/5'>
                <Link to={"/"}><img src={logo} alt="" className='h-[4rem]'/> </Link>
                </h1>

                <ul className='hidden lg:flex gap-10 '>
                    <li className={` text-white font-bold cursor-pointer ${location.pathname === '/home'?"active":"nav-desgin"} `}><Link to={"/"}>Home</Link></li>
                    {/* <li className={` text-white font-bold cursor-pointer  ${location.pathname === '/contact'?"active":"nav-desgin"}`}><Link to={"/contact"}>Contact</Link></li> */}
                    <li  className={` text-white font-bold cursor-pointer  ${location.pathname === '/login'?"active":"nav-desgin"}`}><Link to={"/login"}>Login</Link></li>
                    <li  className={` text-white font-bold cursor-pointer  ${location.pathname === '/signup'?"active":"nav-desgin"}`}><Link to={"/signup"}>Sign Up</Link></li>
                </ul>
                
                <div className='lg:hidden'>
                {hamburger?<IoClose onClick={()=>{setHamburger((cur)=>!cur)}}/>:<GiHamburgerMenu className=' text-customYellow text-2xl' onClick={()=>{setHamburger((cur)=>!cur)}}/>}
            </div>
            </div>

            {hamburger && (
                <div className='page-width !overflow-hidden h-screen w-screen'>
                <div className='fixed top-0 bottom-0 left-0 right-0 h-[100vh] w-screen backdrop-blur-3xl z-20 flex items-center !overflow-hidden' >
                <IoClose className=' text-customYellow text-5xl absolute top-0 right-0 m-3 border-2 rounded-lg border-textMuted hover:scale-105' onClick={()=>{setHamburger((cur)=>!cur)}}/>
                <ul className='flex flex-col gap-5 pl-10'>
                <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/' && "!text-customYellow"}`}><Link to={"/"} onClick={()=>{setHamburger((cur)=>!cur)}}>Home</Link></li>
                    {/* <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/about' && "!text-customYellow"}`}><Link to={"/contact"} onClick={()=>{setHamburger((cur)=>!cur)}}>Contact</Link></li> */}
                    <li className={` text-gray-800 hover:opacity-75 cursor-pointer text-2xl ${location.pathname === '/signnup' && "!text-customYellow"}`}><Link to={"/signup"} onClick={()=>{setHamburger((cur)=>!cur)}}>SignUp</Link></li>
                    <li>
                    <Link to={"/login"}><button className=' bg-customYellow w-[20rem] py-2 text-white rounded-md font-semibold' onClick={()=>{setHamburger((cur)=>!cur)}}><span className='flex  justify-center items-center gap-3 '>LOGIN <FaSignInAlt className='text-md'/></span></button></Link>
                    </li>
                </ul>
                </div>
            </div>
            )}
        </div>
    </div>
  )
}

export default InternalNavbar