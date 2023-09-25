
import React, { useContext, createContext, useState } from "react";
import { NavLink } from 'react-router-dom';

import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react";
 import { Gauge, Home, CopyCheck, UserSquare2, BadgeCheck, Paperclip, ClipboardList, ChevronRight, ChevronLeft } from "lucide-react";


const adminMenu = [
    {
        name: "Dashboard",
        url: "/",
        icon: <Gauge />,
    },
    {
        name: "Office check-in",
        url: "/checkin",
        icon: <Home />,
    },
    {
        name: "Enquiries",
        url: "/enquiries",
        icon: <CopyCheck />,
    },
    {
        name: "Clients",
        url: "/clients",
        icon: <UserSquare2 />,
    },
    {
        name: "Services",
        url: "/services",
        icon: <BadgeCheck />,
    },
    {
        name: "Quotation",
        url: "/quotation",
        icon: <Paperclip />,
    },
    {
        name: "Tasks",
        url: "/tasks",
        icon: <ClipboardList />,
    },
];

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);
  const [keyword, setKeyword] = useState("");
  return (
    <aside className="h-full">
        
      <nav className="h-full w-60 flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
        <h1>CRM</h1>
       
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
          
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
      
        
   

        <SidebarContext.Provider value={{ expanded }}>
        <div className="justify-start items-center gap-3 flex py-2 px-3 my-1">
                                  <input
                                        placeholder="Quick search"
                                       value={keyword}
                                       onChange={(e) => setKeyword(e.target.value)}
                                         className="self-stretch px-3 py-2 rounded border border-gray-300 justify-between items-center inline-flex  ${!expanded ? 'w-5' : ''}"
                                     />
                                 </div>
          <ul className="flex-1 px-3">
            
            {adminMenu.map((menuItem, index) => (
              <SidebarItem
                key={index}
                icon={menuItem.icon}
                text={menuItem.name}
             
              />
            ))}
          </ul>
        </SidebarContext.Provider>

     
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text,  url,active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <>
    
    <NavLink to={url} activeClassName="">
      <li
        className={`
          relative flex items-center py-2 px-3 my-1
          rounded-md cursor-pointer
          transition-colors group text-slate-700 text-[15px] font-medium font-['Inter'] leading-none
          ${
            active
              ? "text-slate-800 text-xl font-medium font-['Inter'] leading-none"
              : "hover:bg-[#EBEBF8] text-xs"
          }
        `}
      >
        {icon}
        <span
          className={`overflow-hidden transition-all ${
            expanded ? "w-52 ml-3" : "w-0"
          }`}
        >
          {text}
        </span>
        {alert && (
          <div
            className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
              expanded ? "" : "top-2"
            }`}
          />
        )}

        {!expanded && (
          <div
            className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-xs
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
          >
           
          </div>
        )}
      </li>
    </NavLink>
    </>
  );
}
