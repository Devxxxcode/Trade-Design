import React, { useEffect, useState } from "react";
import { useUserAccount } from "../../../context/UserAccountContext";
import { apiUrl } from "../../../apiConfig";
import { useAlert } from "../../../context/AlertContext";
import useAxiosPost from "../../../hooks/useAxiosPost";
import { useAuth } from "../../../context/AuthContext";
import { useGlobalMessage } from "../../../context/GlobalMessageConntext";
import { useNavigate } from "react-router-dom";

const Withdrawal = () => {
  const { account,setIsLoading,refetchUserAccount } = useUserAccount();
  const navigate= useNavigate()
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { token } = useAuth();
  const { setGlobalMessage } = useGlobalMessage();
  
    const [method,setMethod] = useState("")
    const [instruction, setInstruction] = useState("")
    const [amount, setAmount] = useState("");
    const [charge, setCharge] = useState("");
    const [finalAmount,setFinalAmount] = useState("")
    const [wallet,setWallet] = useState("")
    const minAmount = 10000
    const maxAmount = 100000
    const [formErrors, setFormErrors] = useState({});

    const handleSelectChange = (e) => {
        const selectedMethod = e.target.value;

        setMethod(selectedMethod);

        selectedMethod === "bitcoin"?(setInstruction("Enter Your Wallet Address Details below")):(setInstruction("Enter Your Bank Account Infomation Details Below"));
        
    }

    const handleAmountChange = (e) => {
      const inputValue = e.target.value;
  
      // Use regex to allow numbers with up to 7 decimal places
      const regex = /^\d*\.?\d{0,7}$/;
      if (regex.test(inputValue) || inputValue === "") {
        setAmount(inputValue);
      }
    };

    useEffect(()=>{
      if(amount){
        const amountCharge = amount * 0.2
        const totalAmount = Number(amount) + Number(amountCharge)
        setCharge(amountCharge)
        setFinalAmount(totalAmount)
      }
      else {
        setCharge(0)
        setFinalAmount(0)
      }
    },[amount])

    const handleFormSubmit = (e) => {
      e.preventDefault();
      // checks if a posting is current in process to aviod mulitle post
      if (isPosting) {
        return;
      }
      // Form validation logic
      const errors = {};
  
      if (amount.trim() === "") {
        errors.amount = "Please enter the Amount to be withdrawn";
      }
      else if(Number(finalAmount) > Number(account.account_balance)){
        errors.amount = `Insufficient Balance! Your account has only $${account.account_balance}`
      }
      else if(Number(finalAmount) < Number(minAmount)){
        errors.amount = `Minimum Withdrawal Amount is $${minAmount}`
      }
      else if(Number(finalAmount) > Number(maxAmount)){
        errors.amount = `Minimum Withdrawal Amount is $${maxAmount}`
      }
      if (wallet.trim() === "") {
        errors.wallet = "Please enter your wallet";
      }
  
      if (Object.keys(errors).length === 0) {
        setIsLoading(true);
        const formData2 = new FormData();
  
        formData2.append("amount", amount);
        formData2.append("method", method);
        formData2.append("wallet_address", wallet);
  
        triggerPost(formData2, `${apiUrl}/account/withdrawal/`, token);
      } else {
        setFormErrors(errors);
        setAlert1(true)
      }
    };

    const errorMessage = `<small>${Object.values(formErrors).map(error => error && `<li>${error}</li>`).join('')}</small>`;
    setAlertInfo1(errorMessage)

    useEffect( () => {
      setIsLoading(false);
      const getResponse = async ()=>{
        if (response && !postError) {
          setAlert2(true);
          setAlertInfo2(`Withdrawal of $${amount} has been placed successfully`);
          setAlert1(false);
          setGlobalMessage(true, null);
          await refetchUserAccount()
          navigate("/dashboard/home")
        }
        if (!response && postError) {
          setAlert2(true);
          setAlert1(false);
          setGlobalMessage(null, true);
          setAlertInfo2(postError.message);
        }
      }
      getResponse()
    }, [response, postError]);
  

  return (
    <div className=" bg-[#050d1a] w-full h-full md:p-5 p-1 overflow-auto">
      <div className="h-full overflow-auto mb-16 md:mb-32 lg:mb-16 w-full">
        <div className="lg:grid lg:grid-cols-3 gap-5">


        <div className="text-white lg:mb-0 mb-5">
            <div className=" bg-deepBlue border-[0.5px] border-white/10 rounded-sm">
            <h3 className="font-extrabold border-b border-[0.5px] border-white/10 p-3">
            Withdraw instruction
            </h3>
            <p className="p-3 min-h-2">{instruction}</p>
            </div>
          </div>

          <div className=" col-span-2 text-white bg-deepBlue border-[0.5px] border-white/10 rounded-sm order-first">
            <h3 className="font-extrabold border-b border-[0.5px] border-white/10 p-3">
              Current balance: {account.account_balance} USD
            </h3>
            <div action="" className="flex flex-col p-3 gap-4" >
              <div className="flex flex-col gap-1">
                <label htmlFor="method" className=" text-textMuted">
                  Withdraw Method
                </label>
                <select
                value={method}
                onChange={handleSelectChange}
                  id="method"
                  name="method"
                  className="w-full bg-[#050d1a] border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                >
                  <option disabled selected value={""}>
                    select Method
                  </option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="bank" >Bank</option>
                </select>
              </div>
             {method && (

                 <form className="w-full flex flex-col gap-4" onSubmit={handleFormSubmit}> 
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Amount" className=" text-textMuted">
                     Withdraw Amount
                   </label>
                   <input
                     type="text"
                     id="Amount"
                     value={amount}
                     onChange={handleAmountChange}
                     className="w-full bg-[#050d1a] border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                   />
                   <label htmlFor="method" className=" text-textMuted text-sm">
                     Min amount $ {minAmount} Max amount {maxAmount}
                   </label>
                 </div>
   
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Charge" className=" text-textMuted">
                     Withdraw Charge
                   </label>
                  <div className=" relative">
                   <input
                       disabled
                       value={20}
                       type="text"
                       id="Amount"
                       className="w-full bg-black/20 border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                       />
                   <div className=" bg-customYellow absolute top-0 p-3 right-0">percent</div>
                  </div>
                 </div>
   
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Charge" className=" text-textMuted">
                    Final Withdraw Amount 
                   </label>
                   <input
                       disabled
                       value={finalAmount}
                       type="text"
                       id="Amount"
                       className="w-full bg-black/20  border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                       />
                  </div>
   
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Charge" className=" text-textMuted">
                   Account Email / Wallet Address 
                   </label>
                   <input
                       type="text"
                       id="Amount"
                       value={wallet}
                       onChange={(e) => setWallet(e.target.value)}
                       className="w-full bg-[#050d1a]  border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                       />
                  </div>
   
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Charge" className=" text-textMuted">
                   Account Information
                   </label>
                   <textarea
                       rows={5}
                       type="text"
                       id="Amount"
                       className="w-full bg-[#050d1a]  border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                       />
                  </div>
   
                 <div className="flex flex-col gap-1">
                   <label htmlFor="Charge" className=" text-textMuted">
                  Additional Note
                   </label>
                   <textarea
                       rows={5}
                       type="text"
                       id="Amount"
                       className="w-full bg-[#050d1a]  border-[0.5px] border-white/20 rounded-md p-3  outline-none focus:border-customYellow text-white"
                       />
                  </div>
   
                  <button className=' bg-customYellow rounded-md p-3 mt-2 text-white w-full' type="submit">Withdraw now</button>
                  </form>
             )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Withdrawal;
