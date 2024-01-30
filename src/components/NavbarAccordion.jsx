import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function NavbarAccordion() {
  const [open, setOpen] = React.useState(0);

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
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
      <Accordion className="m-0" open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className={`border-none text-gray-800 hover:opacity-75 cursor-pointer text-2xl font-normal m-0 p-0 outline-none ${['/bitcoin', '/forex', '/requirement', '/marijuana', '/estate', '/crudeoil'].includes(location.pathname) ? "!text-customOrange" : ""}`}>Markets</AccordionHeader>
        <AccordionBody>
         <ul className="flex flex-col gap-3">
         {menuItems.map(({ title, link }) => (
            <a href={link} key={title}>
                <li variant="h6" color="blue-gray" className={`mb-1 text-gray-700 cursor-pointer text-md font-normal ml-5  ${location.pathname === link && "!text-customOrange"}`}>
                  {title}
                </li>
            </a>
          ))}
         </ul>
        </AccordionBody>
      </Accordion>
    </>
  );
}