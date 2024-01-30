import React, { useEffect, useState } from 'react'
import logo from "../assest/thefiptrades logo.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import "../styles/internalnavbar.css"
import { Avatar } from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import avatarIcon from "../assest/avataricon.jpeg"
import { GrLogout } from "react-icons/gr";
import { OpenCanvas } from './OpenCanvas';
import { useAuth } from '../context/AuthContext';


const AuthNavbar = ({user}) => {
    const [dropDown, setDropDown] = useState(false)
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate()
    const {logout } = useAuth();

   
  return (
    <div className=' bg-[#030912]  internal-navbar fixed px-4 top-0 z-50  w-full'>
             <OpenCanvas open={open} setOpen={setOpen}/>
        <div className=''>
            <div className='flex justify-between h-[10vh] items-center'>

               <div className='flex gap-3 w-2/5 md:w-1/5 items-center'>
               <GrLogout  className='text-white text-4xl bg-customYellow p-1 lg:hidden' onClick={()=>setOpen(!open)}/>
               <h1 className=' w-full ' >
                <Link to={"/"}><img src={logo} alt="" className=' md:h-[4rem]'/> </Link>
                </h1>
               </div>

                <ul className=' relative cursor-pointer'>
                    {/* <li className={` text-white font-bold cursor-pointer ${location.pathname === '/home'?"active":"nav-desgin"} `}><Link to={"/home"}>Home</Link></li>
                    <li className={` text-white font-bold cursor-pointer  ${location.pathname === '/contact'?"active":"nav-desgin"}`}><Link to={"/contact"}>Contact</Link></li>
                    <li  className={` text-white font-bold cursor-pointer  ${location.pathname === '/login'?"active":"nav-desgin"}`}><Link to={"/login"}>Login</Link></li>
                    <li  className={` text-white font-bold cursor-pointer  ${location.pathname === '/signup'?"active":"nav-desgin"}`}><Link to={"/signup"}>Sign Up</Link></li> */}
                    <li className='flex gap-2 items-center rounded-md border bg-[#ffffff0d] p-2 border-[#ffffff0d]' onClick={()=>setDropDown(cur=>!cur)}>
                    <Avatar src={user.image?user.image:avatarIcon} alt="avatar" size="sm" />
                    <p className='text-white font-bold'>{user.username}</p>
                    <IoIosArrowDown className='text-white' />
                    </li>

                    {dropDown &&(
                        <li className='flex flex-col gap-3 absolute border w-full p-4  z-20 bg-black  border-[#030912] mt-2'>
                        <p className='text-white cursor-pointer' onClick={()=>{navigate("/dashboard/setting");setDropDown(false)}}>Settings</p>
                        <p className='text-white cursor-pointer' onClick={logout}>Logout</p>
                    </li>
                    )}
                </ul>
    
            </div>
        </div>
    </div>
  )
}

export default AuthNavbar