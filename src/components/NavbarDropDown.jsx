import React from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Card,
  Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';
 
const menuItems = [
  {
    title: "Bitcoin Mining",
    link:"/bitcoin"
  },
  {
    title: "Forex",
    link:"/forex"
  },
  {
    title: "Retirement Planning",
    link:"/requirement"
  },
  {
    title: "Marijuana",
    link:"/marijuana"
  },
  {
    title: "Real Estate",
    link:"/estate"
  },
  {
    title: "Crude Oil",
    link:"/crudeoil"
  },
];
 
export function MenuCustomList() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const location = useLocation();
 
  return (
    <Menu open={openMenu} handler={setOpenMenu} allowHover>
      <MenuHandler>
        <Button
          variant="text"
          className={`flex items-center gap-3 text-base font-normal capitalize tracking-normal text-gray-600 hover:opacity-75 cursor-pointer hover:bg-white 
          ${['/bitcoin', '/forex', '/requirement', '/marijuana', '/estate', '/crudeoil'].includes(location.pathname) ? "!text-customOrange" : ""}`}
        >
          Markets{" "}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3.5 w-3.5 transition-transform ${
              openMenu ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="hidden  overflow-visible lg:grid outline-none">
       
        <ul className="col-span-4 flex w-full flex-col gap-1 outline-none">
          {menuItems.map(({ title, link }) => (
            <a href={link} key={title}>
              <MenuItem>
                <Typography variant="h6" color="blue-gray" className={`mb-1 text-gray-700 cursor-pointer text-sm font-normal  ${location.pathname === link && "!text-customOrange"}`}>
                  {title}
                </Typography>
              </MenuItem>
            </a>
          ))}
        </ul>
      </MenuList>
    </Menu>
  );
}