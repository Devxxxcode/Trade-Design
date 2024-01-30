import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import AuthNavbar from "../components/AuthNavbar";
import { SideBar } from "../components/Sidebar";
import AlertWithProgress from "../components/AlertWithProgress";
import { useAuth } from "../context/AuthContext";
import useAxiosFetch from "../hooks/useAxiosFetch";
import { apiUrl } from "../apiConfig";
import Loader from "../loaders/Loader";
import { UserAccountProvider, useUserAccount } from "../context/UserAccountContext";
import { useAlert } from "../context/AlertContext";
import { useGlobalMessage } from "../context/GlobalMessageConntext";

const InternalLayoutComponent = () => {
  const { user, isLoading, account } = useUserAccount();
  const {
    alert1,
    alertInfo1,
    showAlert1,
    hideAlert1,
    alert2,
    alertInfo2,
    showAlert2,
    hideAlert2,
    setAlert1,
    setAlert2,
    setAlertInfo1,
    setAlertInfo2
  } = useAlert();
  const { globalResponse, globalError, setGlobalMessage } = useGlobalMessage();

  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
  };
  const loader = isEmpty(user) || isEmpty(account) || isLoading;

  return (
    <div>
      <div className=" relative bg-[#050d1a]">
        <AuthNavbar user={user} />
        <AlertWithProgress alert={alert1} setAlert={setAlert1} message={alertInfo1} duration={"5000"}/> {/* show the html message */}
        <AlertWithProgress alert={alert2} setAlert={setAlert2} message={alertInfo2}  alertClassName={globalResponse && "!bg-green-500"}/>
        {loader && <Loader loaderColor={" backdrop-blur-md  the-loader2"} />}
        <div className="flex fixed top-[10vh] w-full h-full">
          <div className="hidden lg:block">
            <SideBar />
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};


export default function InternalLayout() {
  return (
    <UserAccountProvider>
      <InternalLayoutComponent />
    </UserAccountProvider>
  );
}