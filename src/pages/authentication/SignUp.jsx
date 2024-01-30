import React, { useEffect, useState } from "react";
import InternalNavbar from "../../components/InternalNavbar";
import background from "../../assest/frontend_login_image.png";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { apiUrl } from "../../apiConfig";
import AlertWithProgress from "../../components/AlertWithProgress";
import useAxiosPost from "../../hooks/useAxiosPost";
import { useNavigate } from "react-router-dom";
import Loader from "../../loaders/Loader";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const [alert,setAlert] = useState(false)
  const [alert2,setAlert2] = useState(false)
  const [alertInfo,setAlertInfo] = useState("")
  const navigate = useNavigate()
  const initialFormData = {
    firstName: "",
    lastName: "",
    userName: "",
    phone: "",
    email: "",
    password: "",
    password2: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
  };

  useEffect(() => {
    if (response && !postError) {
    setAlert2(true);
    setAlertInfo(response.message)
    setAlert(false)

    setTimeout(() => {
        navigate("/login")
    }, 2000);
    }
    if (!response && postError) {
      console.log(postError.message);
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
        email: formData.email,
        first_name: formData.firstName,
        last_name: formData.lastName,
        password: formData.password,
        phone: formData.phone,
        username: formData.userName,
      };

      triggerPost(requestData, `${apiUrl}/auth/register/`);
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

  return (
    <div className="!bg-[#030912] !min-h-[100vh]">
    {isPosting && <Loader loaderColor={" backdrop-blur-md "}/>}
    <AlertWithProgress alert={alert} setAlert={setAlert} message={errorMessage} duration={"5000"}/>
    <AlertWithProgress alert={alert2} setAlert={setAlert2} message={alertInfo}  alertClassName={response && "!bg-green-500"}/>
      <div className="page-width">
        <InternalNavbar />
        <div className=" flex justify-between">
          <div className="hidden md:block flex-grow w-1/2">
            <img src={background} alt="" className="h-full" />
          </div>
          <div className="!min-h-full flex-grow w-1/2 flex flex-col justify-center items-center">
            <form className="w-full  flex flex-col justify-center  h-full mb-10 lg:mb-0" onSubmit={handleFormSubmit}>
                <div className=" relative">
                   
                </div>
              <h3 className="font-bold text-white text-center mb-5 text-lg">
                Create An Account
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="first-name"
                    className=" text-textMuted font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFieldChange}
                    id="first-name"
                    placeholder="Enter your first name"
                    className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="last-name"
                    className=" text-textMuted font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleFieldChange}
                    value={formData.lastName}
                    id="last-name"
                    placeholder="Enter your last name"
                    className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="Username"
                    className=" text-textMuted font-semibold"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="userName"
                    id="Username"
                    onChange={handleFieldChange}
                    value={formData.userName}
                    placeholder="Enter your Username"
                    className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="Phone"
                    className=" text-textMuted font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="Phone"
                    value={formData.phone}
                    onChange={handleFieldChange}
                    placeholder="Enter your Phone number"
                    className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className=" text-textMuted font-semibold"
                >
                  Email
                </label>
                <input
                //   type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFieldChange}
                  id="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 mt-5">
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
                        onClick={() => setShowPassword((password) => !password)}
                      />
                    ) : (
                      <IoEyeSharp
                        className=" absolute text-textMuted right-3 top-3 text-2xl"
                        onClick={() => setShowPassword((password) => !password)}
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

              <button className=" bg-customYellow rounded-md p-3 mt-10 text-white">
                Register
              </button>
              <p className="text-white text-center mt-3">
                Already have an account?{" "}
                <span className="text-blue-500 cursor-pointer" onClick={()=>navigate("/login")}> Login</span>{" "}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
