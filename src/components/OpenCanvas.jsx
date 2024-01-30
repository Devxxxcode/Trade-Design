import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { SideBar } from "./Sidebar";
 
export function OpenCanvas({open,setOpen}) {
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <React.Fragment>
     
      <Drawer open={open} onClose={closeDrawer} className="p-4  bg-[#030912] text-white">
        <div className="mb-6 flex items-center justify-end">
          
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer} className="text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        
        <SideBar/>
      </Drawer>
    </React.Fragment>
  );
}