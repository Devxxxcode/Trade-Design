import React, { useEffect, useState } from 'react'
import placeholderImage from "../../assest/imageplacholder.png"
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { apiUrl } from '../../apiConfig';
import useAxiosPut from '../../hooks/useAxiosPut';
import { useAlert } from '../../context/AlertContext';
import { useUserAccount } from '../../context/UserAccountContext';
import { useGlobalMessage } from '../../context/GlobalMessageConntext';

const Setting = () => {
    const navigate= useNavigate()
    const { token} = useAuth();
    const { user,refetchUserAccount,setIsLoading } = useUserAccount();
    const { setGlobalMessage } = useGlobalMessage();
    const {
        setAlert1,
        setAlert2,
        setAlertInfo1,
        setAlertInfo2
      } = useAlert();
    const { triggerPut, response, isPutting, putError} = useAxiosPut()
    const initialFormData = {
        firstName: "",
        lastName: "",
        userName: "",
        phone: "",
        email: "",
        country:"",
        city:"",
        zip:"",
        state:"",
        image:"",
        imageUrl:""
      };

    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState({});

    const isEmpty = (obj) => {
        return Object.entries(obj).length === 0;
      };

    useEffect(() => {
        setIsLoading(false)
        if (response && !putError) {
        setAlert2(true);
        setAlertInfo2("User Successfully Updated")
        setAlert1(false)
        setGlobalMessage(true,null)
        refetchUserAccount()
        }
        if (!response && putError) {
          
          setAlert2(true);
          setAlert1(false)
          setGlobalMessage(null,true)
          let errorMessages = Object.values(putError).flat();
          errorMessages = errorMessages.join("<br>")
          errorMessages = `<small>${errorMessages}</small>`
          setAlertInfo2(errorMessages)
        }
      }, [response, putError]);

      const handleFormSubmit = (e) => {
        e.preventDefault();
        // checks if a posting is current in process to aviod mulitle post
        if (isPutting) {
          return;
        }
        // Form validation logic
        const errors = {};
    
        if (formData.firstName.trim() === "") {
          errors.firstName = "Please enter your first name";
        }
    
        if (formData.lastName.trim() === "") {
          errors.lastName = "Please enter a your last name.";
        }
    
        const MIN_USERNAME_LENGTH = 5;
        const MAX_USERNAME_LENGTH = 15;
    
        const userNameTrimmed = formData.userName.trim();
    
        if (!userNameTrimmed) {
          errors.userName = "Please enter a username";
        } else if (userNameTrimmed.length < MIN_USERNAME_LENGTH) {
          errors.userName = `Username must be at least ${MIN_USERNAME_LENGTH} characters long`;
        } else if (userNameTrimmed.length > MAX_USERNAME_LENGTH) {
          errors.userName = `Username must be at most ${MAX_USERNAME_LENGTH} characters long`;
        }
    
        if (formData.phone.trim() === "") {
          errors.phone = "Please enter a phone number";
        } else if (!/^\d+$/.test(formData.phone.trim())) {
          errors.phone = "Phone number must contain only numeric digits";
        }
    
        if (
          formData.email.trim() === "" ||
          !formData.email.includes("@") ||
          !formData.email.includes(".com")
        ) {
          errors.email = "Please enter a vaild email.";
        }
    
        if (Object.keys(errors).length === 0) {
            setIsLoading(true)
            const formData2 = new FormData();

            formData2.append('email', formData.email);
            formData2.append('first_name', formData.firstName);
            formData2.append('last_name', formData.lastName);
            formData2.append('phone', formData.phone);
            formData2.append('username', formData.userName);
            formData2.append('country', formData.country);
            formData2.append('city', formData.city);
            formData2.append('zip_code', formData.zip);
            formData2.append('state', formData.state);
            
            // Append the image file to FormData
            if (formData.image) {
                formData2.append('image', formData.image);
              }

          triggerPut(formData2, `${apiUrl}/auth/user/`,token);
        } else {
          setFormErrors(errors);
          setAlert1(true)
        }
      };

      const handleFieldChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        // Clear the error message for the field when it changes
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
        if (Object.values(formErrors).map(error => error).join('') == ""){
            setAlert1(false)
        }
      };

      const getDetail = (data)=>{
        const detail = {
        firstName: data.first_name?data.first_name:"",
        lastName: data.last_name?data.last_name:"",
        userName: data.username?data.username:"",
        phone: data.phone?data.phone:"",
        email: data.email?data.email:"",
        country:data.country?data.country:"",
        city:data.city?data.city:"",
        zip:data.zip_code?data.zip_code:"",
        state:data.state?data.state:"",
        imageUrl:data.image
        }
        setFormData({...detail})
      }

      useEffect(()=>{
        if (!isEmpty(user)){
            getDetail(user)
        }
      },[user])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
    
        if (file) {
          const imageUrl = URL.createObjectURL(file);
          setFormData({...formData,image:file,imageUrl:imageUrl})
        }
      };

      const errorMessage = `<small>${Object.values(formErrors).map(error => error && `<li>${error}</li>`).join('')}</small>`;
      setAlertInfo1(errorMessage)



  return (
    <div className=" bg-[#050d1a] w-full h-full md:p-5 p-1 overflow-auto " id='settings'>
        <form className='bg-deepBlue border-[0.5px] border-white/10 rounded-sm flex flex-wrap  p-5 justify-center md:justify-between overflow-auto mb-16' onSubmit={handleFormSubmit}>
            <div className='lg:w-3/12 flex flex-col gap-2 items-center mb-5 md:mb-0'>
                <p className=' text-white'>Profile Picture</p>
                <img src={formData.imageUrl || placeholderImage} alt="" className="h-[15rem] w-[15rem] object-cover bg-white rounded-full " />
                <div className='mt-3'><label  htmlFor='placerimg' className=' !text-white rounded bg-customYellow cursor-pointer p-2'>Choose File</label></div>
                <input type="file" name="" id="placerimg" accept="image/*" className=' hidden' onChange={handleImageChange}/>
            </div>

            <div className='flex flex-col gap-5 lg:w-9/12'>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">First Name</label>
                    <input type="text" name="firstName" id="" value={formData.firstName}
                    onChange={handleFieldChange}/>
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">Last Name</label>
                    <input type="text" name="lastName" id="" onChange={handleFieldChange}
                    value={formData.lastName} />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">Username</label>
                    <input type="text" name="userName" id="" onChange={handleFieldChange}
                    value={formData.userName} />
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">Email Address</label>
                    <input type="email" name="email" id="" disabled  className=' opacity-25' value={formData.email}
                  onChange={handleFieldChange}/>
                </div>
                <div className='flex flex-col gap-2 '>
                    <label htmlFor="">Phone</label>
                    <input name="phone" id="" value={formData.phone}
                    onChange={handleFieldChange} />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">Country</label>
                        <input type="text" name="country" id=""  value={formData.country}
                  onChange={handleFieldChange} />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">City</label>
                        <input type="text" name="city" id=""  value={formData.city}
                  onChange={handleFieldChange} />
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">Zip</label>
                        <input type="text" name="zip" id=""  value={formData.zip}
                  onChange={handleFieldChange} />
                    </div>
                    <div className='flex flex-col gap-2 '>
                        <label htmlFor="">State</label>
                        <input type="text" name="state" id=""   value={formData.state}
                  onChange={handleFieldChange}/>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                <button className=' bg-green-400 rounded-md p-3 mt-2 text-white' type="submit" >Update</button>
                <button className=' bg-customYellow rounded-md p-3 mt-2 text-white' onClick={()=>navigate("/dashboard/changepassword")}>Change Password</button>
                </div>
            </div>
            <div>

            </div>
        </form>
    </div>
  )
}

export default Setting