import { Card, Typography } from "@material-tailwind/react";
 
const TABLE_HEAD = ["Ticket id", "Subject", "Total reply", "Action"];
 
const TABLE_ROWS = [
  {
    id:"fhjtjcmndkk4345654322",
    Subject: "Have'nt Received Payment",
    totalReply: "2",
    Action: "Pending",
  },
  
  {
    id:"fhjtjcmndkk4345654322",
    Subject: "Have'nt Received Payment",
    totalReply: "2",
    Action: "Pending",
  },
  
  {
    id:"fhjtjcmndkk4345654322",
    Subject: "Have'nt Received Payment",
    totalReply: "2",
    Action: "Pending",
  },
  
  {
    id:"fhjtjcmndkk4345654322",
    Subject: "Have'nt Received Payment",
    totalReply: "2",
    Action: "Pending",
  },
  
];
 
export function SupportTable() {
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
          {TABLE_ROWS.map(({ id, Subject, totalReply,Action }, index) => (
            <tr key={name} className="even:bg-lightBlue">
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {id}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {Subject}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="white" className="font-normal">
                  {totalReply}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="white" className="font-medium">
                  {Action}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}