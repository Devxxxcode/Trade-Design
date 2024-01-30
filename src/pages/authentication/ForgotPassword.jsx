import React, { useEffect, useState } from "react";
import InternalNavbar from "../../components/InternalNavbar";
import background from "../../assest/frontend_login_image.png";
import { useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import useAxiosPost from "../../hooks/useAxiosPost";
import AlertWithProgress from "../../components/AlertWithProgress";
import { apiUrl } from "../../apiConfig";
import Loader from "../../loaders/Loader";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [codeSent,setCodeSent] = useState(false)
  const [email,setEmail] = useState("")
  const [alert,setAlert] = useState(false)
  const [alert2,setAlert2] = useState(false)
  const [alertInfo,setAlertInfo] = useState("")

  const { triggerPost, response, isPosting, postError } = useAxiosPost();

  const initialFormData = {
    code:"",
    password:"",
    password2:""
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (response && !postError) {
    setAlert2(true);
    setCodeSent(true)
    setAlertInfo(response.message)
    setAlert(false)

    if (codeSent){
        setTimeout(() => {
            navigate("/login")
        }, 3000);
    }
    }
    if (!response && postError) {
      setAlertInfo(postError.message)
      setAlert2(true);
      setAlert(false)
    }
  }, [response, postError]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // checks if a posting is current in process to aviod mulitle post
    if (isPosting) {
      return;
    }
    // Form validation logic
    const errors = {};

    if (formData.code.trim() === "") {
      errors.code = "Please enter the 5 digits code";
    }

    const MIN_PASSWORD_LENGTH = 5;

    if (!formData.password.trim()) {
      errors.password = "Please enter a password";
    } else if (formData.password.trim().length < MIN_PASSWORD_LENGTH) {
      errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
    }

    if (formData.password2.trim() !== formData.password.trim()) {
      errors.password2 = "Passwords must match";
    }
    if (Object.keys(errors).length === 0) {
      var requestData = {
        email:email,
        token: formData.code,
        new_password: formData.password,
      };

      triggerPost(requestData, `${apiUrl}/auth/confirm-password-reset/`);
    } else {
      setFormErrors(errors);
      setAlert(true)
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
        setAlert(false)
    }
  };

  const errorMessage = `<small>${Object.values(formErrors).map(error => error && `<li>${error}</li>`).join('')}</small>`;
  

  const handleMail = (e)=>{
    e.preventDefault();

    if (isPosting) {
        return;
      }
    if (
        email.trim() === "" ||
        !email.includes("@") ||
        !email.includes(".com")
      ) {
        setAlert2(true)
        setAlertInfo("Enter a vaild mail")
      }
      var requestData = {
        email: email,
      };
    
      triggerPost(requestData, `${apiUrl}/auth/reset-password/`);
  }

  return (
    <div className="bg-[#030912] h-screen overflow-hidden">
        {isPosting && <Loader loaderColor={" backdrop-blur-md "}/>}
         <AlertWithProgress alert={alert} setAlert={setAlert} message={errorMessage} duration={"5000"}/>
        <AlertWithProgress alert={alert2} setAlert={setAlert2} message={alertInfo}  alertClassName={response && "!bg-green-500"}/>
      <div className="page-width">
        <InternalNavbar />
        <div className="h-[90vh] flex justify-between">
          <div className="hidden md:block flex-grow w-1/2">
            <img src={background} alt="" className="h-full" />
          </div>
          <div className=" flex-grow w-1/2 flex flex-col justify-center items-center">
            <form className="w-full md:w-10/12 mx-auto flex flex-col justify-center  h-full" onSubmit={codeSent?handleFormSubmit:handleMail}>
              <h3 className="font-bold text-white text-center mb-5 text-lg">
                Request for reset password
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className=" text-textMuted font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    disabled = {codeSent}
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                  />
                </div>
                { codeSent &&
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <label
                        htmlFor="code"
                        className=" text-textMuted font-semibold"
                      >
                        code
                      </label>
                      <input
                        // type="email"
                        name="code"
                        value={formData.code}
                        onChange={handleFieldChange}
                        id="code"
                        placeholder="Enter the 5 digit code sent to your mail"
                        className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="Password"
                        className=" text-textMuted font-semibold"
                      >
                        Password
                      </label>
                      <div className="flex flex-col gap-2 relative">
                        {showPassword ? (
                          <FaRegEyeSlash
                            className=" absolute text-textMuted right-3 top-3 text-2xl"
                            onClick={() =>
                              setShowPassword((password) => !password)
                            }
                          />
                        ) : (
                          <IoEyeSharp
                            className=" absolute text-textMuted right-3 top-3 text-2xl"
                            onClick={() =>
                              setShowPassword((password) => !password)
                            }
                          />
                        )}
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          onChange={handleFieldChange}
                          value={formData.password}
                          id="Password"
                          placeholder="Enter your password"
                          className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow !pr-10"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="Confirm"
                        className=" text-textMuted font-semibold"
                      >
                        Confirm Password
                      </label>
                      <div className="flex flex-col gap-2 relative">
                        {showPassword2 ? (
                          <FaRegEyeSlash
                            className=" absolute text-textMuted right-3 top-3 text-2xl"
                            onClick={() =>
                              setShowPassword2((password) => !password)
                            }
                          />
                        ) : (
                          <IoEyeSharp
                            className=" absolute text-textMuted right-3 top-3 text-2xl"
                            onClick={() =>
                              setShowPassword2((password) => !password)
                            }
                          />
                        )}
                        <input
                          type={showPassword2 ? "text" : "password"}
                          name="password2"
                            onChange={handleFieldChange}
                            value={formData.password2}
                          id="Confirm"
                          placeholder="Enter your password"
                          className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow !pr-10"
                        />
                      </div>
                    </div>
                  </div>
                }
              </div>

              <button className=" bg-customYellow rounded-md p-3 mt-5 text-white">
                Login
              </button>
              <p className="text-white text-center mt-3">
                Login again? <span className="text-blue-500"> Login</span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
