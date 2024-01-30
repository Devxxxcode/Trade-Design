import React, { useEffect, useState } from "react";
import AuthNavbar from "../../components/AuthNavbar";
import { SideBar } from "../../components/Sidebar";
import { ForexCrossRates } from "react-ts-tradingview-widgets";
import { OpenCanvas } from "../../components/OpenCanvas";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import { apiUrl } from "../../apiConfig";
import Loader from "../../loaders/Loader";
import { useUserAccount } from "../../context/UserAccountContext";

const AuthHome = () => {
  const navigate = useNavigate();
  const { account, isLoading,refetchUserAccount } = useUserAccount();
  const isEmpty = (obj) => {
    return Object.entries(obj).length === 0;
  };

  useEffect(()=>{
    const getAcct = async()=>{
      await refetchUserAccount()
    }

    getAcct()
  },[])

  return (
    <div className=" bg-[#050d1a] w-full h-full p-5 overflow-auto">
      {!isLoading && !isEmpty(account) && (
        <div className="w-full h-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="flex flex-col rounded-md bg-customYellow p-5 pl-0 pb-8">
              <div className="  rounded-md text-white text-lg pl-5 pb-5 font-semibold">
                Account Balance
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-8 font-extrabold text-2xl text-white">
                {account.account_balance} USD
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-customYellow p-5 pl-0 pb-8">
              <div className="  rounded-md text-white text-lg pl-5 pb-5 font-semibold">
                Total Withdraw
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-8 font-extrabold text-2xl text-white">
                {account.total_withdraw} USD
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            <div className="flex flex-col rounded-md bg-customYellow p-3 pl-0">
              <div className="  rounded-md text-white text-lg pl-3 pb-3 font-semibold">
                Total invest
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-5 font-extrabold text-2xl text-white">
                {account.total_invest} USD
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-customYellow p-3 pl-0">
              <div className="  rounded-md text-white text-lg pl-3 pb-3 font-semibold">
                Pending Invest
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-5 font-extrabold text-2xl text-white">
                {account.pending_invest} USD
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-customYellow p-3 pl-0">
              <div className="  rounded-md text-white text-lg pl-3 pb-3 font-semibold">
                Pending Withdraw
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-5 font-extrabold text-2xl text-white">
                {account.pending_withdraw} USD
              </div>
            </div>
            <div className="flex flex-col rounded-md bg-customYellow p-3 pl-0">
              <div className="  rounded-md text-white text-lg pl-3 pb-3 font-semibold">
                Refferal earn
              </div>
              <div className=" bg-[#050d1a] w-11/12 rounded-r-full p-5 font-extrabold text-2xl text-white">
                0.00 USD
              </div>
            </div>
          </div>

          <div className="my-10 mb-16 ">
            <ForexCrossRates
              colorTheme="dark"
              width={"100%"}
              height={500}
            ></ForexCrossRates>
          </div>
        </div>
      )}
    </div>
  );
};

export default AuthHome;
