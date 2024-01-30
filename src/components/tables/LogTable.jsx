import { Card, Typography } from "@material-tailwind/react";
import { useUserAccount } from "../../context/UserAccountContext";
 
const TABLE_HEAD = ["Trx", "User", "Gateway", "Amount","Charge","Payment","date"];
 
const TABLE_ROWS = [
  {
    trx:"fhjtjcmndkk4345654322",
    User: "John Michael",
    Gateway: "Bitcoin",
    Amount: "50USD",
    Charge:"1USD",
    Payment:"49USD",
    date:"05/28/2000"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    User: "John Michael",
    Gateway: "Bitcoin",
    Amount: "50USD",
    Charge:"1USD",
    Payment:"49USD",
    date:"05/28/2000"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    User: "John Michael",
    Gateway: "Bitcoin",
    Amount: "50USD",
    Charge:"1USD",
    Payment:"49 USD",
    date:"05/28/2000"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    User: "John Michael",
    Gateway: "Bitcoin",
    Amount: "50USD",
    Charge:"1USD",
    Payment:"49USD",
    date:"05/28/2000"
  },
  {
    trx:"fhjtjcmndkk4345654322",
    User: "John Michael",
    Gateway: "Bitcoin",
    Amount: "50USD",
    Charge:"1USD",
    Payment:"49USD",
    date:"05/28/2000"
  },
];
 
export function LogTable({data}) {
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
        {data.length !==0 && data.map(({ transaction_hash, gateway,amount,charge,created_at }, index) => (
            <tr key={index} className="even:bg-lightBlue">
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {transaction_hash}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {user.last_name} {user.first_name}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {gateway} 
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {Number(amount) + Number(charge)} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {charge} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {amount} USD
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {convertTimestampToDateFormat(created_at)}
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