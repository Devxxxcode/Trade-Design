import React, { useEffect, useState } from "react";
import QR from "../../../assest/ethQR.png";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "../../../context/AlertContext";
import useAxiosPost from "../../../hooks/useAxiosPost";
import { useAuth } from "../../../context/AuthContext";
import { useUserAccount } from "../../../context/UserAccountContext";
import { useGlobalMessage } from "../../../context/GlobalMessageConntext";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { apiUrl, ethQR, ethWalletAddress } from "../../../apiConfig";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

const EtherumGatewayDeposit = () => {
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { token } = useAuth();
  const { setIsLoading } = useUserAccount();
  const { setGlobalMessage } = useGlobalMessage();
  const { id } = useParams()
  const [data, setData] = useState({});
  const [isCopied, setIsCopied] = useState(false);

  const {
    data: logData,
    isLoading: logIsLoading,
    fetchError: logFetchError,
  } = useAxiosFetch(`${apiUrl}/account/investment_plans/`, token, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      if (logData.length !== 0 && !logFetchError && !logIsLoading) {
        let newArr = logData.filter((item)=>item.id==id)
        if (newArr.length == 0){
            navigate("/dashboard/investment")
        }
        
        setData(newArr[0]);
        setIsLoading(false);
      }
      if (!logData && logFetchError) {
        setAlert1(true);
        setAlertInfo1("An Error Occurred");
        setData([]);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [logData, logFetchError, logIsLoading]);

  const queryParams = new URLSearchParams(window.location.search);
  const amt = queryParams.get("amount");
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [btcAmount, setBtcAmount] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const btcPrice = 0.00045;

  useEffect(() => {
    if (isNaN(amt) || amt == "" || !amt) {
        navigate(`/dashboard/invest/gateway/${id}`);
    } else {
      const formattedAmount = parseFloat(amt).toFixed(2);
      const formattedCharge = formattedAmount * 0.01;
      const calAmount = formattedAmount - formattedCharge;
      const btc = calAmount * btcPrice;
      const formattedNumber = btc.toFixed(7);
      const cutNumber = formattedNumber.slice(
        0,
        formattedNumber.indexOf(".") + 8
      );
      setAmount(formattedAmount);
      setCharge(formattedCharge);
      setBtcAmount(cutNumber);
    }
  }, [amt]);

  useEffect(() => {
    setIsLoading(false);
    if (response && !postError) {
      setAlert2(true);
      setAlertInfo2(`Investment of $${amount} in ${data.name} Investment plan was successfully`);
      setAlert1(false);
      setGlobalMessage(true, null);
      navigate("/dashboard/home")
    }
    if (!response && postError) {
      setAlert2(true);
      setAlert1(false);
      setGlobalMessage(null, true);
      setAlertInfo2("Investment Failed");
    }
  }, [response, postError]);

  const handleAmountChange = (e) => {
    const inputValue = e.target.value;

    // Use regex to allow numbers with up to 7 decimal places
    const regex = /^\d*\.?\d{0,7}$/;
    if (regex.test(inputValue) || inputValue === "") {
      setAmount(inputValue);
    }
  };

  const handleFileChange = (e) => {
    // Get the selected file from the input
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // checks if a posting is current in process to aviod mulitle post
    if (isPosting) {
      return;
    }
    // Form validation logic
    const errors = {};

    if (amount === "") {
      errors.amount = "Please enter the Amount Sent";
    }
    if(amount !="" && amount < data.min_investment){
        errors.amount = `Minimum investment amount is $${data.min_investment}`
    }

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      const formData2 = new FormData();

      formData2.append("amount", amount);
      formData2.append("gateway", "Ethereum");
      formData2.append("investment_plan", data.id);
      

      triggerPost(formData2, `${apiUrl}/account/invest-deposit/`, token);
    } else {
      setAlertInfo1(errors.amount)
      setAlert1(true);
    }
  };
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className=" bg-[#050d1a] w-full h-full  p-5 overflow-auto">
      <div className="h-full overflow-auto mb-16 md:mb-32 lg:mb-16 w-full">
        <div className="lg:grid lg:grid-cols-2 gap-5">
          <div className=" bg-deepBlue text-white border-[0.5px] border-white/20 rounded-sm">
            <h3 className="p-3 font-bold border-b-[0.5px] border-white/20 rounded-sm">
              Bank payment information
            </h3>

            <div className="p-3">
              <div className=" border-[0.5px] border-white/20">
                <div className="flex justify-between border-b-[0.5px] border-white/20 p-2">
                  <p>Method currency</p>
                  <p>eth</p>
                </div>  

                <div className="p-2 leading-8 break-words">
                  <div>
                  Send the Deposit Amount to the wallet address below
                  <br /><span className=" font-extrabold mr-1">{ethWalletAddress}</span>
                    <CopyToClipboard
                      text={ethWalletAddress}
                      onCopy={handleCopy}
                    >
                      <button>
                        <MdOutlineContentCopy className="" />
                      </button>
                    </CopyToClipboard>{" "}
                    {isCopied && (
                      <span className="bg-white text-black font-light text-xs p-1 py-[0.1rem]">
                        copied
                      </span>
                    )}
                  </div>
                  <div className="mt-3 mx-auto">
                    <img src={ethQR} alt="" className="mx-auto w-[100%] md:w-[50%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 lg:mt-0">
            <div className="">
              <div className=" bg-deepBlue text-white border-[0.5px] border-white/20 rounded-sm">
                <h3 className="p-3 font-bold border-b-[0.5px] border-white/20 rounded-sm">
                  Payment information
                </h3>
                <div className="p-3">
                  <div className=" border-[0.5px] border-white/20">
                    <div className="flex flex-col divide-y border-b-[0.5px] border-white/20 divide-white/20">
                      <div className="p-2 flex justify-between">
                        <p>Gateway name:</p>
                        <p>Ethereum</p>
                      </div>
                      <div className="p-2 flex justify-between">
                        <p>Amount:</p>
                        <p>{amount} USD</p>
                      </div>
                      <div className="p-2 flex justify-between">
                        <p>Charge:</p>
                        <p>{charge} USD</p>
                      </div>
                      <div className="p-2 flex justify-between">
                        <p>Conversion rate:</p>
                        <p>1 USD = {btcPrice}</p>
                      </div>
                      <div className="p-2 flex justify-between">
                        <p>Total payable amount:</p>
                        <p>{btcAmount} eth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <form className=" bg-deepBlue text-white border-[0.5px] border-white/20 rounded-sm mt-5" onSubmit={handleFormSubmit}>
          <h3 className="p-3 font-bold border-b-[0.5px] border-white/20 rounded-sm">
            Requirments
          </h3>
          <div className="p-3 flex flex-col gap-3">
            {/* <div className="flex flex-col gap-2">
              <label htmlFor="hash">Transaction Hash</label>
              <input
                type="text"
                name=""
                id="hash"
                className="w-full bg-[#050d1a] border border-textMuted/20 rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
              />
            </div> */}
            <div className="flex flex-col gap-2">
              <label htmlFor="hash">Amount Sent In Dollars</label>
              <input
                type="text"
                name=""
                id="hash"
                pattern="[0-9]*"
                inputMode="numeric"
                value={amount}
                onChange={handleAmountChange}
                className="w-full bg-[#050d1a] border border-textMuted/20 rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="hash">Payment Screenshot</label>
              <input
                type="file"
                name=""
                id=""
                required
                accept="image/*"
                onChange={handleFileChange}
                className="w-full bg-[#050d1a] border border-textMuted/20 rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
              />
            </div>

            <button className=' bg-customYellow rounded-md p-3 mt-2 text-white' type="submit">Deposit Now</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EtherumGatewayDeposit