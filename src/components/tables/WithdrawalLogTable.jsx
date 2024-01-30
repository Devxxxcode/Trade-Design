import { Card, Typography } from "@material-tailwind/react";
import { useUserAccount } from "../../context/UserAccountContext";
 
const TABLE_HEAD = ["Trx", "Date", "Method name	", "Withdraw amount","Getable amount","Charge","Status","Action"];
 
const TABLE_ROWS = [
  {
    trx:"fhjtjcmndkk4345654322",
    Date: "John Michael",
    MethodName: "Bitcoin",
    WithdrawAmount: "50USD",
    GetableAmount:"1USD",
    ChargeType:"49USD",
    Charge:"20USD",
    Status:"done",
    Action:"none"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    Date: "John Michael",
    MethodName: "Bitcoin",
    WithdrawAmount: "50USD",
    GetableAmount:"1USD",
    ChargeType:"49USD",
    Charge:"20USD",
    Status:"done",
    Action:"none"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    Date: "John Michael",
    MethodName: "Bitcoin",
    WithdrawAmount: "50USD",
    GetableAmount:"1USD",
    ChargeType:"49USD",
    Charge:"20USD",
    Status:"done",
    Action:"none"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    Date: "John Michael",
    MethodName: "Bitcoin",
    WithdrawAmount: "50USD",
    GetableAmount:"1USD",
    ChargeType:"49USD",
    Charge:"20USD",
    Status:"done",
    Action:"none"
  },
  
];
 
export function WithdrawalLogTable({data}) {
  const { user, isLoading, account } = useUserAccount();

  function convertTimestampToDateFormat(timestamp) {
    const date = new Date(timestamp);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
  
    return `${month}/${day}/${year}`;
  }


  return (
    <Card className="h-full w-full overflow-scroll bg-deepBlue mt-5 border border-white/20">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" bg-customYellow   p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="leading-none opacity-70 !font-bold text-deepBlue"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length !==0 && data.map(({ transaction_hash, created_at, method,amount,getable_amount,charge,status,action }, index) => (
            <tr key={index} className="even:bg-lightBlue">
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {transaction_hash}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {convertTimestampToDateFormat(created_at)}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {method}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {amount} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {getable_amount} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {charge} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {status=="True"?"Completed":"Pending"}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {action?action:"none"}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {data.length == 0 && <tr className=" text-white text-center font-bold mt-2" > No record Found</tr>}
    </Card>
  );
}