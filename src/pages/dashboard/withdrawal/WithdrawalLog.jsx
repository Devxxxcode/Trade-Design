import React, { useEffect, useState } from 'react'
import { WithdrawalLogTable } from '../../../components/tables/WithdrawalLogTable'
import { useAuth } from '../../../context/AuthContext';
import { useAlert } from '../../../context/AlertContext';
import useAxiosFetch from '../../../hooks/useAxiosFetch';
import { useUserAccount } from '../../../context/UserAccountContext';
import { apiUrl } from '../../../apiConfig';

const WithdrawalLog = () => {

    const { token } = useAuth();
  const [data,setData] = useState([])
  const [searchData,setSearchData] = useState([])
  const [trxId,setTrxId] = useState("")
  const [date,setDate] = useState("")
  const [searched,setSearched] = useState(false)
  const {
    setAlert1,
    setAlertInfo1,
  } = useAlert();

  const { data: logData, isLoading: logIsLoading, fetchError: logFetchError } = useAxiosFetch(
    `${apiUrl}/account/withdrawal/`,
    token,
    []
  );
  const { setIsLoading } = useUserAccount();

    const [type, setType] = useState("")

    const handleClick = (type)=>{
        setType(type)
    }


    useEffect(()=>{
        if (trxId == "" && date ==""){
          setSearchData([])
          setSearched(false)
        }
        if(type==""){
            setData(logData)
        }else if(type == "pending"){
            let filterPendings = logData.filter((item)=> item.status == "False")
            setData(filterPendings)
        }else if(type == "completed"){
            let filterPendings = logData.filter((item)=> item.status == "True")
            setData(filterPendings)
        }
      },[trxId,date,type])

    function convertTimestampToDateFormat(timestamp) {
        const date = new Date(timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const year = date.getFullYear();
      
        return `${year}-${month}-${day}`;
      }

      useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            if (logData && !logFetchError && !logIsLoading) {
              setData(logData);
              setIsLoading(false);
            }
            if (logData && logFetchError) {
              setAlert1(true)
              setAlertInfo1("An Error Occurred")
              setData([])
              setIsLoading(false);
            }
        };
    
        fetchData();
      }, [logData, logFetchError, logIsLoading]);


  const handleFormSearch = (e) =>{
    e.preventDefault()
    if(trxId){
      const newlog = data.filter((log)=>log.transaction_hash == trxId)
      setSearchData(newlog)
      setSearched(true)
    }
    if(date){
      const newlog = data.filter((log)=>{
        return ((convertTimestampToDateFormat(log.created_at)) == (date))
      })
      setSearchData(newlog)
      setSearched(true)
    }
  }

  return (
    <div className=" bg-[#050d1a] w-full h-full  p-5 overflow-auto">

        <form className='flex justify-end gap-4 flex-col md:flex-row' onSubmit={handleFormSearch}>
            <input type="text" className='border border-white/20 rounded-md p-2 text-white/30 bg-deepBlue outline-none' placeholder='transaction id' value={trxId} onChange={(e)=>setTrxId(e.target.value)}/>
            <input type="date" className='border border-white/20 rounded-md p-2 text-white/30 bg-deepBlue outline-none  ' onChange={(e)=>setDate(e.target.value)} />
            <button className=' bg-customYellow rounded-md p-3 px-7 text-white' type="submit">Search</button>
        </form>


        <div className='md:w-8/12 lg:w-6/12 mx-auto border-b border-white/20 flex justify-between text-white px-3 py-4 mt-5'>
            <div className={`${type == "" && "text-customYellow"} cursor-pointer`} onClick={()=>handleClick("")}>All withdrawal</div>
            <div className={`${type == "pending" && "text-customYellow"} cursor-pointer`} onClick={()=>handleClick("pending")}>Pending withdrawal</div>
            <div className={`${type == "completed" && "text-customYellow"} cursor-pointer`} onClick={()=>handleClick("completed")}>Completed withdrawal</div>
        </div>

        <div className='mb-24'>
            <WithdrawalLogTable data={ searched? searchData:data}/>
        </div>
    </div>
  )
}

export default WithdrawalLog