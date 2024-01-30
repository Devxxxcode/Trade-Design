import React, { useEffect, useState } from 'react'
import InternalNavbar from '../../components/InternalNavbar'
import background from  "../../assest/frontend_login_image.png"
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import AlertWithProgress from '../../components/AlertWithProgress';
import useAxiosPost from '../../hooks/useAxiosPost';
import { useAuth } from '../../context/AuthContext';
import Spinners from '../../loaders/Spinner';
import Loader from '../../loaders/Loader';
import { apiUrl } from '../../apiConfig';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [alertInfo,setAlertInfo] = useState("")
    const [alert,setAlert] = useState(false)
    const navigate = useNavigate()

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState({})
    const { triggerPost, response, isPosting, postError } = useAxiosPost();

    const { token, login, logout } = useAuth();


    useEffect(()=>{
        if (response && !postError){
            login(response.token)
            navigate("/dashboard/home")
        }
        if (!response && postError){
            setAlert(true);
            setAlertInfo(postError.detail)
        }
    },[response,postError,token])


    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
        };
    
      const handleSubmit = async (e) => {
        e.preventDefault();

        if (isPosting) {
            return;
          }
        let errorFound = false
    
        if (password === "") {
            setError(prevError => ({ ...prevError, passwordError: true }));
          errorFound = true
        }
        if (mail.trim() === "" || !mail.includes("@") || !mail.includes(".com")) {
            setError(prevError => ({ ...prevError, mailError: true }));
            setMail("")
            errorFound = true
        }
    
        if (errorFound) return;
    
        var formdata = new FormData();
        formdata.append("email", mail.toLowerCase());
        formdata.append("password", password);
        triggerPost(formdata,`${apiUrl}/auth/login/`);    
    }
    
    function handlecheck(e) {
        if (e.target.name === "email") setError(prevError => ({ ...prevError, mailError: "" }));
        if (e.target.name === "password")setError(prevError => ({ ...prevError, passwordError: "" }));
      }
    

  return (
    <>
    {isPosting && <Loader loaderColor={" backdrop-blur-md "}/>}
          <div className='bg-[#030912] h-screen overflow-hidden'>
          <AlertWithProgress alert={alert} setAlert={setAlert} message={alertInfo}/>
             <div className='page-width'>
                <InternalNavbar/>
                <div className='h-[90vh] flex justify-between'>
                    <div className='hidden md:block flex-grow w-1/2'>
                        <img src={background} alt="" className='h-full' />
                    </div>
                    <div className=' flex-grow w-1/2 flex flex-col justify-center items-center'>
                        <form autocomplete="on" onSubmit={handleSubmit} className='w-full md:w-10/12 mx-auto flex flex-col justify-center  h-full'>
                            <h3 className='font-bold text-white text-center mb-5 text-lg'>Login your account</h3>
                            <label htmlFor="username" className=' text-textMuted font-semibold mb-3'>Email</label>
                            <input type="text" id="username" className={`w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow ${error.mailError && "form-error"}`}
                            placeholder={`${error.mailError?"Enter a vaild mail":'Enter your email'}`}
                             value={mail}
                             name="email"
                             onChange={(e)=>{setMail(e.target.value); handlecheck(e)}}
                            />
    
                            <label htmlFor="password" className=' text-textMuted font-semibold mb-3 mt-5'>Password</label>
                            <div className='relative'>
                                {showPassword?<FaRegEyeSlash className=' absolute text-textMuted right-3 top-3 text-2xl' onClick={()=>setShowPassword(password=>!password)}/>: <IoEyeSharp className=' absolute text-textMuted right-3 top-3 text-2xl' onClick={()=>setShowPassword(password=>!password)} />}
    
                                <input type={showPassword?"text":"password"} id="password" placeholder='Enter your password' className={`w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow !pr-10 ${error.passwordError && "form-error"}`}
                                value={password}
                                name="password"
                                onChange={(e)=>{setPassword(e.target.value); handlecheck(e)}}
                                />
                                </div>
                            
                            <p className=' text-textMuted mt-2 text-end '><span className='hover:text-customYellow cursor-default' onClick={()=>navigate("/forgotpassword")}>Forget Password?</span></p>
    
                            <button className=' bg-customYellow rounded-md p-3 mt-2 text-white' type="submit">{isPosting?<Spinners className=' text-black h-6 w-6 border border-3 '/>:"Login"}</button>
                            <p className='text-white text-center mt-3'>Don't have an account? <span className='text-blue-500 cursor-pointer ' onClick={()=>navigate("/signup")}> Sign Up</span> </p>
                        </form>
                    </div>
                </div>
        </div>
       </div>
    
    </>
  )
}

export default Login