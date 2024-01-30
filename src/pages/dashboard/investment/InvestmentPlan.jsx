import React, { useEffect, useState } from 'react'
import { InvestmentCard } from './InvestmentCard'
import { useAuth } from '../../../context/AuthContext';
import { useAlert } from '../../../context/AlertContext';
import { apiUrl } from '../../../apiConfig';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { useUserAccount } from '../../../context/UserAccountContext';
import { BalanceInvestmentModal } from './BalanceInvestmentModal';

const InvestmentPlan = () => {
  const { token } = useAuth();
  const [data,setData] = useState([])
  const [investmentData,setInvestmentData] = useState({})
  const [investmentId,setInvestmentId] = useState("")
  const {
    setAlert1,
    setAlertInfo1,
  } = useAlert();

  const { data: logData, isLoading: logIsLoading, fetchError: logFetchError } = useAxiosFetch(
    `${apiUrl}/account/investment_plans/`,
    token,
    []
  );
  const { setIsLoading } = useUserAccount();
  const [showModal,setShowModal] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        if (logData && !logFetchError && !logIsLoading) {
          setData(logData.reverse());
          setIsLoading(false);
        }
        if (!logData && logFetchError) {
          setAlert1(true)
          setAlertInfo1("An Error Occurred")
          setData([])
          setIsLoading(false);
        }
    };

    fetchData();
  }, [logData, logFetchError, logIsLoading]);

  useEffect(()=>{
    const filterData = data.filter((item)=>item.id == investmentId)
    setInvestmentData(filterData[0])
  },[investmentId,data])

  return (
    <div className=" bg-[#050d1a] w-full h-full  p-5 overflow-auto">
      <BalanceInvestmentModal
        open={showModal}
        setOpen={setShowModal}
        method={"Balannce"}
        data={investmentData}
        setShowModal={setShowModal}
      />
       <div className='mb-16 lg:mt-5' >
       <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mx-auto' >
        {data.map(({name,times,roi,id})=><InvestmentCard packages={name} times={times} percentage={roi} id={id} setShowModal={setShowModal} setInvestmentId={setInvestmentId}/>)}
       </div>
       </div>
    </div>
  )
}

export default InvestmentPlan