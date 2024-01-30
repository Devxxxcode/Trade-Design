import React, { useEffect, useState } from 'react'
import { useUserAccount } from '../../../context/UserAccountContext';
import { useNavigate } from 'react-router-dom';
import { useAlert } from '../../../context/AlertContext';
import useAxiosPost from '../../../hooks/useAxiosPost';
import { useAuth } from '../../../context/AuthContext';
import { useGlobalMessage } from '../../../context/GlobalMessageConntext';
import { apiUrl } from '../../../apiConfig';

const Transfer = () => {
    const { account,setIsLoading,refetchUserAccount } = useUserAccount();
  const navigate= useNavigate()
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { token } = useAuth();
  const { setGlobalMessage } = useGlobalMessage();

  const [amount, setAmount] = useState("");
  const [wallet,setWallet] = useState("")
  const minAmount = 1000
  const maxAmount = 10000
  const [formErrors, setFormErrors] = useState({});


  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    // Use regex to allow numbers with up to 7 decimal places
    const regex = /^\d*\.?\d{0,7}$/;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

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
    else if(Number(amount) > Number(account.account_balance)){
      errors.amount = `Insufficient Balance! Your account has only $${account.account_balance}`
    }
    else if(Number(amount) < Number(minAmount)){
      errors.amount = `Minimum Transfer Amount is $${minAmount}`
    }
    else if(Number(amount) > Number(maxAmount)){
      errors.amount = `Minimum Trannsfer Amount is $${maxAmount}`
    }
    if (
        wallet.trim() === "" ||
        !wallet.includes("@") ||
        !wallet.includes(".com")
      ) {
        errors.wallet = "Please enter a valid email address"
      }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      const formData2 = new FormData();

      formData2.append("amount", amount);
      formData2.append("receiver_email", wallet);

      triggerPost(formData2, `${apiUrl}/account/trasfer-funds/`, token);
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
        setAlertInfo2(`Transfer of $${amount} has been placed successfully`);
        setAlert1(false);
        setGlobalMessage(true, null);
        await refetchUserAccount()
        // navigate("/dashboard/home")
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
        <div className='md:w-8/12 lg:w-6/12 mx-auto bg-deepBlue lg:mt-5 text-white border-[0.5px] border-white/10 rounded-sm'>
        <div className=" border-b border-[0.5px] border-white/10 p-3 flex justify-between">
            <div className=' font-extrabold'>Transfer money</div>
            <div className=' text-textMuted'>Current Balance : {account.account_balance} USD</div>
        </div>
        <div className='p-3'>
            <h3 className=' text-blue-300'>Min Transfer Amount : {minAmount} USD</h3>
            <div className= "flex justify-between flex-wrap">
            <div className='text-blue-300'>Max Transfer Amount : {maxAmount} USD</div>
            <div className=' text-blue-300'>Transfer Charge : 2 %</div>
        </div>

        <form action="" className='flex flex-col gap-4 mt-2' onSubmit={handleFormSubmit}>
            <div className='flex gap-1 flex-col'>
                <label htmlFor="" className='text-textMuted'>Receiver Email</label>
                <input type="email" name="" id="email" placeholder='Transfer account email' className='w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow' value={wallet} onChange={(e)=>setWallet(e.target.value)}/>
            </div>
            <div className='flex gap-1 flex-col'>
                <label htmlFor="" className='text-textMuted'>Amount</label>
                <input type="text" name="" id="email" placeholder='Transfer Aamount' className='w-full bg-[#050d1a] border border-textMuted rounded-md p-3 text-textMuted outline-none focus:border-customYellow' value={amount} onChange={handleAmountChange}/>
            </div>
            <button className=' bg-customYellow rounded-md p-3 mt-2 text-white'>Trasfer money</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Transfer