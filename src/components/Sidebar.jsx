import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { accordionTheme } from "../themes/accordionTheme";
import { FaFilterCircleDollar } from "react-icons/fa6";
import { MdPayments } from "react-icons/md";
import { BiMoneyWithdraw } from "react-icons/bi";
import { BiTransfer } from "react-icons/bi";
import { IoLogoUsd } from "react-icons/io5";
import { MdOutlineSupportAgent } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";
import { useAuth } from "../context/AuthContext";

export function SideBar() {
  const [open, setOpen] = React.useState(0);
  const location = useLocation();
  const navigate = useNavigate()
  const {logout } = useAuth();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <ThemeProvider value={accordionTheme}>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-[#030912] rounded-none overflow-auto">
        <List>
          <ListItem
            className={`text-white hover:text-customYellow ${
              location.pathname === "/dashboard/home" && "bg-customYellow"
            }`}
            onClick={()=>navigate("/dashboard/home")}
          >
            <ListItemPrefix >
              <PresentationChartBarIcon className={`h-5 w-5 text-white `} />
            </ListItemPrefix>
            Dashboard
          </ListItem>

          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0 " selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 "
              >
                <ListItemPrefix>
                  <FaFilterCircleDollar className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-white "
                >
                  Investment
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 text-white">
                <ListItem
                className={`text-white text-sm hover:text-customYellow ${
                    location.pathname === "/dashboard/investment" && "bg-customYellow"
                  }`}
                  onClick={()=>navigate("/dashboard/investment")}
                >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Investment plans
                </ListItem>
                <ListItem 
                className={`text-white text-sm hover:text-customYellow ${
                    location.pathname === "/dashboard/investment/log" && "bg-customYellow"
                  }`}
                  onClick={()=>navigate("/dashboard/investment/log")}
                >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Invest log
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <MdPayments className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-white"
                >
                  Deposit
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 text-white">
                <ListItem className={`text-sm ${
              location.pathname === "/dashboard/deposit" && "bg-customYellow"
            }`}
            onClick={()=>navigate("dashboard/deposit")}
            >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Deposit
                </ListItem>
                <ListItem className={`text-sm ${
                    location.pathname === "/dashboard/deposit/log" && "bg-customYellow"}`}
                    onClick={()=>navigate("dashboard/deposit/log")}
                >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Deposit Log
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 3}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <BiMoneyWithdraw className="h-5 w-5" />
                </ListItemPrefix>
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-white"
                >
                  Withdraw
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0 text-white">
              <ListItem className={`text-sm ${
                    location.pathname === "/dashboard/withdrawal" && "bg-customYellow"}`}
                    onClick={()=>navigate("/dashboard/withdrawal")}
                >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Withdraw
                </ListItem>
                <ListItem className={`text-sm ${
                    location.pathname === "/dashboard/withdrawal/log" && "bg-customYellow"}`}
                    onClick={()=>navigate("/dashboard/withdrawal/log")}
                >
                  <ListItemPrefix>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M18 12H6"
                      />
                    </svg>
                  </ListItemPrefix>
                  Withdraw Log
                </ListItem>
              </List>
            </AccordionBody>
          </Accordion>

          <ListItem
            className={`text-white hover:text-customYellow ${
              location.pathname === "/dashboard/transfer" && "bg-customYellow"
            }`}
            onClick={()=>navigate("/dashboard/transfer")}
          >
            <ListItemPrefix>
              <BiTransfer className="h-5 w-5" />
            </ListItemPrefix>
           Transfer money
           
          </ListItem>
          <ListItem
            className={`text-white hover:text-customYellow ${
              location.pathname === "/dashboard/transfer/log" && "bg-customYellow"
            }`}
            onClick={()=>navigate("/dashboard/transfer/log")}
          >
            <ListItemPrefix>
              <IoLogoUsd className="h-5 w-5" />
            </ListItemPrefix>
           Transaction log
          </ListItem>
          {/* <ListItem className="text-white hover:text-customYellow">
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
           Refferal log
          </ListItem> */}
          {/* <ListItem
            className={`text-white hover:text-customYellow ${
              location.pathname === "/dashboard/support" && "bg-customYellow"
            }`}
            onClick={()=>navigate("/dashboard/support")}
          >
            <ListItemPrefix>
              <MdOutlineSupportAgent className="h-5 w-5" />
            </ListItemPrefix>
            Support
          </ListItem> */}
          <ListItem className="text-white hover:text-customYellow" onClick={()=>logout()}> 
            <ListItemPrefix>
              <IoLogOut className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </ThemeProvider>
  );
}
