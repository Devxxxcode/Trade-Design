import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../context/AlertContext";
import { useUserAccount } from "../../../context/UserAccountContext";
import useAxiosPost from "../../../hooks/useAxiosPost";
import { apiUrl } from "../../../apiConfig";
import { useAuth } from "../../../context/AuthContext";
import { useGlobalMessage } from "../../../context/GlobalMessageConntext";

export function BalanceInvestmentModal({ open, setOpen, method,data,setShowModal }) {
  const navigate = useNavigate();
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { account,setIsLoading,refetchUserAccount } = useUserAccount();
  const { setGlobalMessage } = useGlobalMessage();
  const [amount, setAmount] = useState("");
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { token } = useAuth();

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    // Allow only numeric values, backspace, and decimal point
    if (/^\d*\.?\d*$/.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handleOpen = () => setOpen(!open);

  const handleDeposit = (e) => {
    e.preventDefault();
    const errors = {};

    if (amount === "") {
      errors.amount = "Please enter amount you want to invest";
    }
    if(amount !="" && amount < data.min_investment){
        errors.amount = `Minimum investment amount is $${data.min_investment}`
    }
    if(amount !="" && amount >  Number(account.account_balance)){
        errors.amount = `Insufficient Balance! Your current account balance is $${account.account_balance}`
    }

    if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        const formData2 = new FormData();
  
        formData2.append("amount", amount);
        formData2.append("investment_plan", data.id);
        
  
        triggerPost(formData2, `${apiUrl}/account/invest-balance/`, token);
    } else {
      setAlertInfo1(errors.amount);
      setAlert1(true);
    }
  };

  useEffect(() => {
    setIsLoading(false);
    const handlefetch =async () =>{
        if (response && !postError) {
            setAlertInfo2(`Investment of $${amount} in ${data.name} Investment plan was successfully`);
            setShowModal(false)
            setAlert2(true);
            setAlert1(false);
            setGlobalMessage(true, null);
            await refetchUserAccount()
            navigate("/dashboard/home")
          }
          if (!response && postError) {
            setAlert2(true);
            setAlert1(false);
            setGlobalMessage(null, true);
            setAlertInfo2("Investment Failed");
          }
    }

    handlefetch()
  }, [response, postError]);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className=" bg-deepBlue border-[0.5px] border-white/30"
      >
        <DialogHeader className="text-white text-md border-b-[0.5px] border-white/30 flex justify-between">
          <div>Investment Amount</div>
          <div className=" text-textMuted">Current Balance: {account.account_balance} USD</div>
        </DialogHeader>
        <form action="" onSubmit={handleDeposit}>
          <DialogBody>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="amount"
                className="text-md text-white/50 font-normal"
              >
                Amount
              </label>
              <input
                type="text"
                name=""
                id="amount"
                className="outline-none focus:outline-customYellow rounded-md p-3 bg-lightBlue outline-1 border border-white/30  focus:border-none"
                pattern="[0-9]*"
                inputMode="numeric"
                value={amount}
                onChange={handleInputChange}
              />
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-3 bg-red-900 text-white"
            >
              <span>Cancel</span>
            </Button>
            <Button type="submit" className=" !bg-customYellow">
              <span>Deposit Now</span>
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
}
