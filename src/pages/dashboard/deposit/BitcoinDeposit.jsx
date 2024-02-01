import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../../context/AlertContext";
import useAxiosPost from "../../../hooks/useAxiosPost";
import { useAuth } from "../../../context/AuthContext";
import { useUserAccount } from "../../../context/UserAccountContext";
import { useGlobalMessage } from "../../../context/GlobalMessageConntext";
import { apiUrl, bitcoinQR, bitcoinWalletAddress } from "../../../apiConfig";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdOutlineContentCopy } from "react-icons/md";

const BitcoinDeposit = () => {
  const { setAlert1, setAlert2, setAlertInfo1, setAlertInfo2 } = useAlert();
  const { triggerPost, response, isPosting, postError } = useAxiosPost();
  const { token } = useAuth();
  const { setIsLoading } = useUserAccount();
  const { setGlobalMessage } = useGlobalMessage();

  const queryParams = new URLSearchParams(window.location.search);
  const amt = queryParams.get("amount");
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [charge, setCharge] = useState("");
  const [btcAmount, setBtcAmount] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const btcPrice = 0.000026;

  useEffect(() => {
    if (isNaN(amt) || amt == "" || !amt) {
      navigate("/dashboard/deposit");
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
      setAlertInfo2(response.message);
      setAlert1(false);
      setGlobalMessage(true, null);
      navigate("/dashboard/home");
    }
    if (!response && postError) {
      setAlert2(true);
      setAlert1(false);
      setGlobalMessage(null, true);
      setAlertInfo2(postError.message);
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

    if (Object.keys(errors).length === 0) {
      setIsLoading(true);
      const formData2 = new FormData();

      formData2.append("amount", amount);
      formData2.append("gateway", "Bitcoin");
      if (selectedFile) {
        formData2.append("image", selectedFile);
      }

      triggerPost(formData2, `${apiUrl}/account/deposit/`, token);
    } else {
      setAlertInfo1(errors.amount);
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
                  <p>bitcoin</p>
                </div>

                <div className="p-2 leading-8 break-words">
                  <div className="break-words">
                    Deposit Instructions - BTC Wallet Address:To make a deposit
                    to TheFipTrades, follow these steps: <br /> Step 1: Log in
                    to your BTC wallet or exchange account. <br /> Step 2:
                    Initiate a BTC withdrawal transaction. <br /> Step 3: Paste
                    the Thefiptrades BTC wallet address provided below as the
                    destination address: <br />
                    <span className=" break-all">
                      Wallet Address: &nbsp;
                      <span className=" font-extrabold">
                        {bitcoinWalletAddress}
                      </span>{" "}
                    </span>
                    <CopyToClipboard
                      text={bitcoinWalletAddress}
                      onCopy={handleCopy}
                    >
                      <button>
                        <MdOutlineContentCopy className=""/>
                      </button>
                    </CopyToClipboard>{" "}
                    {isCopied && (
                      <span className="bg-white text-black font-light text-xs p-1 py-[0.1rem]">
                        copied
                      </span>
                    )}
                    <br /> Step 4: Confirm the transaction details and complete
                    the withdrawal. Please ensure that you provide the correct
                    wallet address and verify all transaction details before
                    proceeding. Once the transaction is confirmed on the
                    blockchain, your funds will be credited to your
                    GlobalSwiftPro account. Upload Proof Screenshot :
                    Transaction Hash: [Insert Transaction Hash] Dollar Amount:
                    [Insert Dollar Amount] [Attach Screenshot ] Please note that
                    blockchain transactions may take some time to be confirmed,
                    depending on network congestion. Rest assured, your funds
                    will be deposited to your GlobalSwiftPro account once the
                    transaction is successfully processed. If you encounter any
                    issues or require further assistance, feel free to contact
                    our customer support team, available 24/7 to assist you.
                    Happy investing with GlobalSwiftPro!
                  </div>
                  <div className="mt-3 mx-auto">
                    <img src={bitcoinQR} alt="" className="mx-auto w-[100%] md:w-[50%]" />
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
                        <p>Bitcoin</p>
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
                        <p>{btcAmount} bitcoin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-deepBlue text-white border-[0.5px] border-white/20 rounded-sm mt-5">
          <h3 className="p-3 font-bold border-b-[0.5px] border-white/20 rounded-sm">
            Requirments
          </h3>
          <form className="p-3 flex flex-col gap-3" onSubmit={handleFormSubmit}>
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
                // pattern="[0-9]*"
                // inputMode="numeric"
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
                required
                id="hash"
                className="w-full bg-[#050d1a] border border-textMuted/20 rounded-md p-3 text-textMuted outline-none focus:border-customYellow"
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>

            <button
              type="submit"
              className=" bg-customYellow rounded-md p-3 mt-2 text-white"
            >
              Deposit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BitcoinDeposit;
