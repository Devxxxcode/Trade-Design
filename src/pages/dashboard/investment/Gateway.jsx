import React, { useEffect, useState } from "react";
import bitcoin from "../../../assest/bitcoin-deposit.png";
import etherumj from "../../../assest/etherum-deposit.png";
import { DepositModal } from "../deposit/DepositModal";
import { InvestmentModal } from "./InvestmentModal";
import { useAuth } from "../../../context/AuthContext";
import { useAlert } from "../../../context/AlertContext";
import { apiUrl } from "../../../apiConfig";
import useAxiosFetch from "../../../hooks/useAxiosFetch";
import { useUserAccount } from "../../../context/UserAccountContext";
import { useNavigate, useParams } from "react-router-dom";

const Gateway = () => {
  const [bitcoinOpen, setBitcoinOpen] = React.useState(false);
  const [EtherumOpen, setEtherumOpen] = React.useState(false);
  const { id } = useParams()
  const navigate = useNavigate()

  const { token } = useAuth();
  const [data, setData] = useState({});
  const { setAlert1, setAlertInfo1 } = useAlert();

  const {
    data: logData,
    isLoading: logIsLoading,
    fetchError: logFetchError,
  } = useAxiosFetch(`${apiUrl}/account/investment_plans/`, token, []);
  const { setIsLoading } = useUserAccount();

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

  return (
    <div className=" bg-[#050d1a] w-full h-full p-5 overflow-auto">
      <InvestmentModal
        open={bitcoinOpen}
        setOpen={setBitcoinOpen}
        method={"bitcoin"}
        data={data}
      />
      <InvestmentModal
        open={EtherumOpen}
        setOpen={setEtherumOpen}
        method={"etherum"}
        data={data}
      />
      <div className="grid place-content-center mx-auto mb-16">
        <div className=" flex gap-10 flex-wrap">
          <div className=" bg-deepBlue flex flex-col gap-4 mx-auto">
            <img src={bitcoin} alt="" className="max-w-[15rem]" />
            <p className="text-white font-extrabold text-center text-lg">
              {" "}
              Bitcoin
            </p>
            <button
              className=" bg-customYellow rounded-md p-3 mt-2 text-white w-11/12 mx-auto"
              onClick={() => setBitcoinOpen(!bitcoinOpen)}
            >
              Pay now
            </button>
          </div>
          <div className=" bg-deepBlue flex flex-col gap-4 mx-auto">
            <img src={etherumj} alt="" className="max-w-[15rem]" />
            <p className="text-white font-extrabold text-center text-lg">
              {" "}
              Ethereum
            </p>
            <button
              className=" bg-customYellow rounded-md p-3 mt-2 text-white w-11/12 mx-auto"
              onClick={() => setEtherumOpen(!EtherumOpen)}
            >
              Pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gateway;
