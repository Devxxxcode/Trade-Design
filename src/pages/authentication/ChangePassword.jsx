import React, { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import useAxiosPost from "../../hooks/useAxiosPost";
import { useAlert } from "../../context/AlertContext";
import { apiUrl } from "../../apiConfig";
import { useAuth } from "../../context/AuthContext";
import { useUserAccount } from "../../context/UserAccountContext";
import { useGlobalMessage } from "../../context/GlobalMessageConntext";

const ChangePassword = () => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowCofirmPassword] = useState(false);
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { token } = useAuth();
  const { setIsLoading } = useUserAccount();
  const { setGlobalMessage } = useGlobalMessage();

  const initialFormData = {
    oldPassword: "",
    password: "",
    password2: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    setIsLoading(false);
    if (response && !postError) {
      setAlert2(true);
      setAlertInfo2(response.message);
      setAlert1(false);
      setGlobalMessage(true, null);
      setFormData({
        ...formData,
        password: "",
        password2: "",
        oldPassword: "",
      });
    }
    if (!response && postError) {
      setAlert2(true);
      setAlert1(false);
      setGlobalMessage(null, true);
      setAlertInfo2(postError.message);
      setFormData({ ...formData, password: "", password2: "" });
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

    if (formData.oldPassword === "") {
      errors.oldPassword = "Please enter your old password";
    }

    const MIN_PASSWORD_LENGTH = 5;

    if (!formData.password.trim()) {
      errors.password = "Please enter your new password";
    } else if (formData.password.trim().length < MIN_PASSWORD_LENGTH) {
      errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
    }

    if (formData.password2.trim() !== formData.password.trim()) {
      errors.password2 = "Passwords must match";
    }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      const formData2 = new FormData();

      formData2.append("old_password", formData.oldPassword);
      formData2.append("new_password", formData.password);

      triggerPost(formData2, `${apiUrl}/auth/password-reset/`, token);
    } else {
      setFormErrors(errors);
      setAlert1(true);
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
    if (
      Object.values(formErrors)
        .map((error) => error)
        .join("") == ""
    ) {
      setAlert1(false);
    }
  };

  const errorMessage = `<small>${Object.values(formErrors)
    .map((error) => error && `<li>${error}</li>`)
    .join("")}</small>`;
  setAlertInfo1(errorMessage);

  return (
    <div
      className=" bg-[#050d1a] w-full h-full md:p-5 p-1 overflow-auto "
      id="changepassword"
    >
      <div className=" bg-deepBlue text-white border-[0.5px] border-white/20 rounded-sm md:w-8/12 lg:w-6/12 mx-auto">
        <h3 className="p-3 font-bold border-b-[0.5px] border-white/20 rounded-sm">
          change password
        </h3>
        <form
          className="flex flex-col gap-5 p-3 mt-3"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="">
              Password
            </label>
            <div className="relative">
              {showOldPassword ? (
                <FaRegEyeSlash
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowOldPassword((password) => !password)}
                />
              ) : (
                <IoEyeSharp
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowOldPassword((password) => !password)}
                />
              )}
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                value={formData.oldPassword}
                onChange={handleFieldChange}
                id="password1"
                placeholder="Enter your old password"
                className=" !pr-10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="">
              New Password
            </label>
            <div className="relative">
              {showNewPassword ? (
                <FaRegEyeSlash
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowNewPassword((password) => !password)}
                />
              ) : (
                <IoEyeSharp
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowNewPassword((password) => !password)}
                />
              )}
              <input
                type={showNewPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleFieldChange}
                id="password2"
                placeholder="Enter your new password"
                className=" !pr-10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="">
              Confirm Password
            </label>
            <div className="relative">
              {showConfirmPassword ? (
                <FaRegEyeSlash
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowCofirmPassword((password) => !password)}
                />
              ) : (
                <IoEyeSharp
                  className=" absolute text-textMuted right-3 top-3 text-2xl"
                  onClick={() => setShowCofirmPassword((password) => !password)}
                />
              )}
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="password2"
                value={formData.password2}
                onChange={handleFieldChange}
                id="password3"
                placeholder="Confirm your password"
                className=" !pr-10"
              />
            </div>
          </div>

          <button className=" bg-customYellow rounded-md p-3 mt-2 text-white">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
