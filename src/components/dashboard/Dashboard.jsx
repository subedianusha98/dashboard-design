import React, { useState, useRef, useEffect } from "react";

import {
  Search,
  Filter,
  ChevronDown,
  Calendar,
  Check,
  MoreVertical,
  ChevronsUpDown
} from "lucide-react";
import PanelLayout from "../PanelLayout";

const Dashboard = () => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [showHiddenColumns, setShowHiddenColumns] = useState(false);
  const [focusedCell, setFocusedCell] = useState({ rowIndex: -1, colIndex: -1 });

  const [header, setHeader] = useState([
    "SN",
    "Name",
    "Added From",
    "Tags",
    "Internal Id",
    "Client Id",
    "Phone",
    "Client Portal",
    "Assignee"
  ]);

  const [data, setData] = useState([
    {
      Checkbox: false,
      Name: "Anusha Subedi",
      Email: "anu@gmail.com",
      "Added From": 10,
      Tags: "-",
      "Internal Id": "Some ID",
      "Client Id": "ID254",
      Phone: "98001234556",
      "Client Portal": "1",
      Assignee: "Ram"
    },
    {
      Checkbox: false,
      Name: "Anusha Subedi",
      Email: "anu@gmail.com",
      "Added From": 10,
      Tags: "-",
      "Internal Id": "Some ID",
      "Client Id": "ID254",
      Phone: "98001234556",
      "Client Portal": "123",
      Assignee: "Ram"
      
    },
    {
    Checkbox: false,
    Name: "Anusha Subedi",
      Email: "anu@gmail.com",
      "Added From": 10,
      Tags: "-",
      "Internal Id": "Some ID",
      "Client Id": "ID254",
      Phone: "98001234556",
      "Client Portal": "123",
      Assignee: "Ram"
    },
    {
    Checkbox: false,
    Name: "Anusha Subedi",
      Email: "anu@gmail.com",
      "Added From": 10,
      Tags: "-",
      "Internal Id": "Some ID",
      "Client Id": "ID254",
      Phone: "98001234556",
      "Client Portal": "Some Portal",
      Assignee: "Ram"
    },
    {
      Checkbox: false,
      Name: "Anusha Subedi",
        Email: "anu@gmail.com",
        "Added From": 10,
        Tags: "-",
        "Internal Id": "Some ID",
        "Client Id": "ID254",
        Phone: "98001234556",
        "Client Portal": "Some Portal",
        Assignee: "Ram"
      },
      {
        Checkbox: false,
        Name: "Anusha Subedi",
          Email: "anu@gmail.com",
          "Added From": 10,
          Tags: "-",
          "Internal Id": "Some ID",
          "Client Id": "ID254",
          Phone: "98001234556",
          "Client Portal": "Some Portal",
          Assignee: "Ram"
        },
        {
          Checkbox: false,
          Name: "Anusha Subedi",
            Email: "anu@gmail.com",
            "Added From": 10,
            Tags: "-",
            "Internal Id": "Some ID",
            "Client Id": "ID254",
            Phone: "98001234556",
            "Client Portal": "Some Portal",
            Assignee: "Ram"
          },
          {
            Checkbox: false,
            Name: "Anusha Subedi",
              Email: "anu@gmail.com",
              "Added From": 10,
              Tags: "-",
              "Internal Id": "Some ID",
              "Client Id": "ID254",
              Phone: "98001234556",
              "Client Portal": "Some Portal",
              Assignee: "Ram"
            },
  ]);
  const [nextId, setNextId] = useState(data.length + 1);
  const handleAddRow = () => {
    const newRow = {
        Checkbox: false,
     
      Name: "",
      "Added From": "",
      Tags: "",
      "Internal Id": "",
      "Client Id": "",
      Phone: "",
      "Client Portal": "",
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
  const handleTabKeyPress = (event, rowIndex, colIndex) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const nextColIndex = colIndex + 1;
      if (nextColIndex < header.length) {
       
        handleCellClick(rowIndex, nextColIndex);
      } else {
      
        const nextRowIndex = rowIndex + 1;
        if (nextRowIndex < data.length) {
          handleCellClick(nextRowIndex, 1);
        }
      }
    }
  };

  console.log("hidden", showHiddenColumns);

  return (
    <PanelLayout>
    <div className="w-[1192px] bg-white  ">
      <div className="sticky top-0">
      <div className="w-[1192px] h-[72px] px-6 py-3 border-b bg-white border-violet-100 justify-between  items-center inline-flex">
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
      <div className="w-[1192px] h-14 py-3  px-3 border-b justify-between items-center sticky top-0 inline-flex">
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
 <div className="w-[1192px] overflow-x-auto">
      <table className="w-full border-collapse">
  <thead className="border px-6 py-3 font-[Inter]">
    <tr className="border">
    
      {header.map((header, key) => (
        
        <TableHead
          onHideColumn={onHideColumn}
          key={key}
          header={header}
          showThreeDots={header !== "SN"}

          
          className="border border-gray-200 leading-none text-xm text-red-700 font-[Inter]"
        />
        
      ))}
      {hiddenColumns.length > 0 && (
        <th className="border relative className='border border-gray-200 leading-none text-xm text-xm text-gray-700 font-[Inter]">
          <p
            onClick={() => {
              setShowHiddenColumns((prev) => !prev);
            }}
            className="px-6 py-3 cursor-pointer"
          >
            + add Column
          </p>
          {showHiddenColumns && (
            <button
              onClick={() => {}}
              className="absolute left-0 z-50 font-normal w-44 p-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            >
              <div className="py-1">
                {hiddenColumns?.map((item) => (
                  <div key={item} className="flex">
                   
                    <p onClick={() => handleShowColumn(item)} className="w-full p-2">
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
            <tr key={index} className="border-yellow-200 px-6 py-3">
            
            {header.map((columnName) => (
  <td
    key={columnName}
    className="border border-gray-200 px-6 py-3 font-[Inter] font-xs text-normal text-slate-500 leading-none"
    contentEditable
    onClick={() => handleCellClick(rowIndex, colIndex)}
    onKeyDown={(e) => handleTabKeyPress(e, rowIndex, colIndex)}
  >
    {columnName === "SN" ? (
     
      <input type="checkbox" />
    ) : (
  
      (columnName === "Name" || columnName === "Assignee") ? (
        <div className="flex items-center">
          <img
            src="https://images.unsplash.com/photo-1604085572504-a392ddf0d86a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwZmxvd2VyfGVufDB8fDB8fHww&w=1000&q=80"
            alt="Profile"
            className="w-6 h-6 rounded mr-2"
          />
          {item[columnName]}
          <br />
          {item.Email}
        </div>
      ) : (
        item[columnName]
      )
    
    )}
    
  </td>
))}

            </tr>
          ))}
        </tbody>
</table>
</div>

    </div>
    </div>
    </PanelLayout>
  );
};

export default Dashboard;

const TableHead = ({ header, onHideColumn ,showThreeDots}) => {
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
    <th className="className='border border-b border-r border-gray-200 px-6 py-3 leading-none  text-xm text-gray-600 font-[Inter]  ">
      <div className="flex relative items-center">
     
      <p style={{ whiteSpace: 'nowrap' }}>{header}</p>
        {showThreeDots && <ChevronsUpDown className="pl-2 w-5 h-5 relative"/>}
        {/* <ChevronsUpDown  className="pl-2 w-5 h-5 relative"/> */}
        {/* three dots icon */}
        <button ref={menuRef} onClick={() => setShowMenu((prev) => !prev)} className="pl-12" >
           {showThreeDots && <MoreVertical size={14}  /> } 
        </button>
        {showMenu && (
          <button
            onClick={() => onHideColumn(header)}
            className="absolute right- font-normal mt-16 w-15 p-5 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <div className="py-1">hide</div>
          </button>
        )}
      </div>
    </th>
  );
};
