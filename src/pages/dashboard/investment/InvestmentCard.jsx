import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
 
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
 
export function InvestmentCard({packages,percentage,times,id,setShowModal,setInvestmentId}) {
  const navigate = useNavigate()
  return (
    <Card className="w-full max-w-[20rem] p-8 bg-customYellow mx-auto hover:scale-105 transition">
      <CardHeader
        floated={false}
        shadow={true}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography
          variant="small"
          color="white"
          className="font-extrabold uppercase text-lightBlue text-xl"
        >
          {packages}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex flex-col justify-center gap-1 text-4xl font-normal text-lightBlue"
        >
          {percentage}%
          <div  className="text-sm capitalize text-textMuted">every hours</div>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">For {times>1000?"a lifetime":times} times</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Capital back No</Typography>
          </li>
          <li className="flex items-center gap-4">
            <span className="rounded-full border border-white/20 bg-white/20 p-1">
              <CheckIcon />
            </span>
            <Typography className="font-normal">Affiliate bonus</Typography>
          </li>
         
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button
          size="lg"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-lightBlue text-textMuted"
          ripple={false}
          fullWidth={true}
          onClick={()=>navigate(`/dashboard/invest/gateway/${id}`)}
        >
         Invest Now
        </Button>
        <Button
          size="lg"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-lightBlue text-textMuted mt-2"
          ripple={false}
          fullWidth={true}
          onClick={()=>{setShowModal(true);setInvestmentId(id)}}
        >
         Invest Using Balance
        </Button>
      </CardFooter>
    </Card>
  );
}