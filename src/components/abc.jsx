import React, { useState, useRef, useEffect } from "react";
import "./styles.css";
import "./styles/tailwind-pre-build.css";

import {
  Search,
  Filter,
  ChevronDown,
  Calendar,
  Check,
  MoreVertical,
  ChevronsUpDown
} from "lucide-react";

const Tasks = () => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [showHiddenColumns, setShowHiddenColumns] = useState(false);

  const [header, setHeader] = useState([
    "ID",
    "NAME",
    "ADDED",
    "Tags",
    "Internal",
    "Chat",
    "Phone",
    "CP",
    "Assignee"
  ]);

  const [data, setData] = useState([
    {
      SN:'1',
      NAME: "Bishwant",
      ADDED: 10,
      Tags: "-",
      Internal: "Some ID",
      Chat: "Some ID",
      Phone: "98001234556",
      CP: "Some Portal",
      Assignee: "Name of Assignee"
    },
    {
      ID: 2,
      NAME: "Bishwant",
      ADDED: 10,
      Tags: "-",
      Internal: "Some ID",
      Chat: "Some ID",
      Phone: "98001234556",
      CP: "Some Portal",
      Assignee: "Name of Assignee"
    },
    {
      ID: 3,
      NAME: "Bishwant",
      ADDED: 10,
      Tags: "-",
      Internal: "Some ID",
      Chat: "Some ID",
      Phone: "98001234556",
      CP: "Some Portal",
      Assignee: "Name of Assignee"
    },
    {
      ID: 3,
      NAME: "Bishwant",
      ADDED: 10,
      Tags: "-",
      Internal: "Some ID",
      Chat: "Some ID",
      Phone: "98001234556",
      CP: "Some Portal",
      Assignee: "Name of Assignee"
    }
  ]);
  const [nextId, setNextId] = useState(data.length + 1);
  const handleAddRow = () => {
    const newRow = {
      Checked: nextId,
      Name: "",
      Added: "",
      Tags: "",
      Internal: "",
      Chat: "",
      Phone: "",
      CP: "",
      Assignee: "",
      asf: ""
    };
    setData([...data, newRow]);
    setNextId(nextId + 1);
  };

  const onHideColumn = (header) => {
    console.log("hea", header);
    setHeader((prev) => {
      return prev.filter((item) => item !== header);
    });
    setHiddenColumns((prev) => {
      return [...prev, header];
    });
  };

  const handleShowColumn = (item) => {
    setHiddenColumns((prev) => {
      return prev.filter((header) => header !== item);
    });
    setHeader((prev) => {
      return [...prev, item];
    });
  };

  console.log("hidden", showHiddenColumns);

  return (
    <div className="w-auto bg-white  max-h-[400px] overflow-y-auto overflow-x-auto">
      <div className="w-[1192px] h-[72px] px-6 border-b bg-white border-violet-100 justify-between items-center inline-flex">
        <div className="justify-start items-start gap-5 flex">
          <div className=" px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
            <Search size={14} />

            <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
              Search Particular
            </div>
            <div className="w-6 h-6 relative" />
          </div>
          <div className="justify-start items-start gap-5 flex">
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <Filter size={14} />

                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                  Filter by assigned
                </div>
              </div>
              <div className=" w-6 h-6 relative">
                <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
                  <option value="" disabled selected hidden></option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <Calendar size={14} />
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                  Date
                </div>
              </div>
              <div className=" w-6 h-6 relative">
                <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
                  <option value="" disabled selected hidden></option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <Check size={14} />
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">
                  Status
                </div>
              </div>
              <div className=" w-6 h-6 relative">
                <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
                  <option value="" disabled selected hidden></option>
                  <option value="option1">1</option>
                  <option value="option2">2</option>
                  <option value="option3">3</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-9 flex">
          <div className="justify-start items-center gap-5 flex">
            {" "}
            <div className="justify-start items-center gap-1.5 flex">
              <div className="w-[18px] h-[18px] relative" />
              <Filter size={14} />
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">
                Filter
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <ChevronsUpDown size={14} />
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">
                Sort
              </div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
              <Filter size={14} />
              <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">
                Saved Filter
              </div>
            </div>
          </div>
          <div className="text-blue-500 text-sm font-medium font-['Inter'] leading-tight">
            Clear
          </div>
        </div>
      </div>
      <div className="w-[1168px] h-14 py-3  px-3 border-b justify-between items-center inline-flex">
        <div className="px-3 py-1.5 bg-[#7474C9] rounded justify-start items-center gap-1.5 flex">
          <div
            className="text-white text-xs font-medium font-['Inter'] leading-none  "
            onClick={handleAddRow}
          >
            New Client
          </div>
          <div className="w-3.5 h-3.5 relative" />
          <ChevronDown size={14} color="white" />
        </div>
        <div className="justify-center items-center flex">
          <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">
              Prospects(18)
            </div>
          </div>
          <div className="px-3 py-1 border-b border-green-400 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">
              Clients(10)
            </div>
          </div>
          <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">
              Archived(0)
            </div>
          </div>
        </div>
      </div>

      <table className="w-full border-collapse ">
        <thead className=" ">
          <tr className=" className='border border-gray-200 px-6 py-3 leading-none  text-xm text-gray-700 font-[Inter]">
            {header.map((header, key) => (
              <TableHead
                onHideColumn={onHideColumn}
                key={key}
                header={header}
              />
            ))}
            {hiddenColumns.length > 0 && (
              <th className="border relative className='border border-gray-200 px-6 py-3 leading-none  text-xm  text-xm text-gray-700 font-[Inter] ">
                <p
                  onClick={() => {
                    setShowHiddenColumns((prev) => !prev);
                  }}
                  className="px-6 py-3 cursor-pointer"
                >
                  Show Columns
                </p>
                {showHiddenColumns && (
                  <button
                    onClick={() => {}}
                    className="absolute left-0  z-50 font-normal  w-44 p-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                  >
                    <div className="py-1">
                      {hiddenColumns?.map((item) => (
                        <div key={item} className="flex">
                          {/* <input
                            onChange={() => {
                              handleShowColumn(item);
                            }}
                            className="mt-2"
                            type="checkbox"
                          /> */}
                          <p
                            onClick={() => handleShowColumn(item)}
                            className="w-full p-2"
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </button>
                )}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-gray-200 px-6 py-3">
              {header.map((columnName) => (
                <td
                  key={columnName}
                  className="border border-gray-200"
                  contentEditable
                >
                  {item[columnName]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tasks;

const TableHead = ({ header, onHideColumn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // to hide menu when click outsite
  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <th className="className='border border-gray-200 px-6 py-3 leading-none  text-xm text-gray-700 font-[Inter]  ">
      <div className="flex relative items-center">
        <p>{header}</p>
        {/* three dots icon */}
        <button ref={menuRef} onClick={() => setShowMenu((prev) => !prev)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm-12-56a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm0 112a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"
            />
          </svg>
        </button>
        {showMenu && (
          <button
            onClick={() => onHideColumn(header)}
            className="absolute right-14 ml-10 w-44 font-normal mt-16 w-44 p-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">hide</div>
          </button>
        )}
      </div>
    </th>
  );
};
