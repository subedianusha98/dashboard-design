import React, { useState,useReducer } from 'react';
import PanelLayout from '../PanelLayout';
import { Search,Filter,ChevronDown, Calendar,Check,MoreVertical, ChevronsUpDown} from 'lucide-react';
const dummyImageUrl = 'https://via.placeholder.com/40x40';
function tableDataReducer(state, action) {
  switch (action.type) {
    case 'ADD_ROW':
      return {
        ...state,
        tableData: [...state.tableData, {}],
      };
    case 'ADD_COLUMN':
      const newColumnKey = action.columnKey;
      return {
        ...state,
        tableData: state.tableData.map((row) => ({
          ...row,
          [newColumnKey]: '', 
        })),
        columnHeaders: [...state.columnHeaders, newColumnKey], 
      };
      case 'SET_HIDDEN_COLUMNS':
        return {
          ...state,
          hiddenColumns: action.hiddenColumns,
        };
  
    default:
      return state;
  }
}
const Clients = () => {
  const [tableDataState, dispatchTableData] = useReducer(tableDataReducer, {
  tableData: [
    {
      name: ' Nisha Giri Puri adc@gmail.com',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
     
    },
    
    {
      name: 'Nisha Giri Puri',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
   
    },
    
    {
      name: 'Nisha Giri Puri',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
      
    },
    
    {
      name: 'Nisha Giri Puri',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
   
    },
    
    {
      name: 'Nisha Giri Puri',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
     
    },
    
    {
      name: 'Nisha Giri Puri',
      addedFrom: 'System',
      tags: '-',
      internalId: 'ID296',
      clientId: '-',
      phone: '+9779867****',
      clientPortal: 'Deactivated',
      assignee: 'Justin',
     
    },
    
  ],
  columnHeaders: [
    'name',
    'addedFrom',
    'tags',
    'internalId',
    'clientId',
    'phone',
    'clientPortal',
    'assignee',
    
  ],
  isNewRow: true,
  hiddenColumns: [], 
});
  const [cellEditing, setCellEditing] = useState({
    name: false,
    addedFrom: false,
    tags: false,
    internalId: false,
    clientId: false,
    phone: false,
    clientPortal: false,
    assignee: false,
    followers: false,
    status: false,
    applications: false,
    lastUpdated: false,
  });

  const handleCellClick = (cellKey) => {
    setCellEditing((prevState) => ({
      ...prevState,
      [cellKey]: !prevState[cellKey],
    }));
  };

  const handleCellChange = (e, cellKey, rowIndex) => {
    const updatedData = [...tableDataState.tableData];
    updatedData[rowIndex][cellKey] = e.target.value;
    dispatchTableData({ type: 'SET_TABLE_DATA', updatedTableData: updatedData });
  };
  const handleAddRow = () => {
    const newRow = {};
    tableDataState.columnHeaders.forEach((header) => {
      newRow[header] = '';
    });

    dispatchTableData({ type: 'ADD_ROW', newRow });
  };
  const toggleColumnVisibility = (column) => {
    
    if (tableDataState.hiddenColumns.includes(column)) {
    
      const updatedHiddenColumns = tableDataState.hiddenColumns.filter((col) => col !== column);
      dispatchTableData({ type: 'SET_HIDDEN_COLUMNS', hiddenColumns: updatedHiddenColumns });
    } else {
  
      const updatedHiddenColumns = [...tableDataState.hiddenColumns, column];
      dispatchTableData({ type: 'SET_HIDDEN_COLUMNS', hiddenColumns: updatedHiddenColumns });
    }
  };
  


  return (
    <PanelLayout>
    <div className="w-[1192px] bg-white overflow-x-auto">
    <div className="w-[1192px] h-[72px] px-6 border-b bg-white border-violet-100 justify-between items-center inline-flex">
    <div className="justify-start items-start gap-5 flex">
        <div className=" px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
        <Search size={14} />
         
           

            <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Search Particular</div>
            <div className='w-6 h-6 relative'/>
        </div>
        <div className="justify-start items-start gap-5 flex">
            <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
                <div className="justify-start items-center gap-1.5 flex">
                <Filter size={14}  />
              
                    <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Filter by assigned</div>
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
                    <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Date</div>
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
                    <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Status</div>
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
            <div className="justify-start items-center gap-1.5 flex">
                <div className="w-[18px] h-[18px] relative" />
                <Filter size={14}/>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Filter</div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
            <ChevronsUpDown size={14} />
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Sort</div>
            </div>
            <div className="justify-start items-center gap-1.5 flex">
            <Filter size={14}/>
                <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Saved Filter</div>
            </div>
        </div>
        <div className="text-blue-500 text-sm font-medium font-['Inter'] leading-tight">Clear</div>
    </div>
</div>
<div className="w-[1168px] h-14 py-3  px-3 border-b justify-between items-center inline-flex">
    <div className="px-3 py-1.5 bg-[#7474C9] rounded justify-start items-center gap-1.5 flex">
      
        <div className="text-white text-xs font-medium font-['Inter'] leading-none  " onClick={handleAddRow}>New Client</div>
        <div className="w-3.5 h-3.5 relative" />
        <ChevronDown size={14} color='white'/>
    </div>
    <div className="justify-center items-center flex">
        <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Prospects(18)</div>
        </div>
        <div className="px-3 py-1 border-b border-green-400 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Clients(10)</div>
        </div>
        <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
            <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Archived(0)</div>
        </div>
    </div>
</div>
   
      <table className="w-full border-collapse">
      <thead >
  <tr>
    {tableDataState.columnHeaders.map((header) => {
      const isColumnHidden = tableDataState.hiddenColumns.includes(header);

      return (
        !isColumnHidden && (
          <th key={header} className="px-6 py-3 border  text-xm  text-gray-700  font-['Inter'] leading-none">
            <span className="  capitalize  font-['Inter'] leading-none">
              {header}
            </span>
            <button
              onClick={() => toggleColumnVisibility(header)}
              className="toggle-visibility-button pl-6"
            >
              {isColumnHidden ? 'Show' : <MoreVertical size={12}/>}
            </button>
          </th>
        )
      );
    })}
  </tr>
</thead>

<tbody>
  {tableDataState.tableData.map((rowData, rowIndex) => (
    <tr key={rowIndex}>
      {tableDataState.columnHeaders.map((cellKey) => {
        const isCellHidden = tableDataState.hiddenColumns.includes(cellKey);

        return (
          <td
          key={cellKey}
          className={`${
            cellEditing[cellKey]
              ? 'w-[153px] h-[50px] font-normal text-xs font-[Inter] text-gray-700 leading-none border-r border-b border-gray-200 justify-start items-center gap-2.5 inline-flex px-2 py-1.5 border editing'
              : 'px-2 py-1.5 border'
          } `}
        >
            <div
              onClick={() => handleCellClick(cellKey)}
              style={{ cursor: 'pointer', position: 'relative', width:'153px', height:'50px',}}
              
            >
              {cellEditing[cellKey] ? (
               <input
               type="text"
               value={rowData[cellKey]}
               className='h-8'
               onChange={(e) => handleCellChange(e, cellKey, rowIndex)}
               onBlur={() => setCellEditing({ ...cellEditing, [cellKey]: false })}
               onKeyDown={(e) => {
                 if (e.key === 'Tab') {
                   e.preventDefault();
                   const nextCellIndex = tableDataState.columnHeaders.indexOf(cellKey) + 1;
                   if (nextCellIndex < tableDataState.columnHeaders.length) {
                     const nextCellKey = tableDataState.columnHeaders[nextCellIndex];
                     handleCellClick(nextCellKey);
                   }
                 }
               }}
             />
              ) : (
                <>
                  {rowData.isNew ? (
                    <input
                      type="text"
                      value={rowData[cellKey]}
                      onChange={(e) => handleCellChange(e, cellKey, rowIndex)}
                      className='h-8'
                    />
                  ) : (
                    <span>{isCellHidden ? '' : rowData[cellKey]}</span>
                  )}

                  {cellEditing[cellKey] ? (
                    <button
                      onClick={() => handleCellClick(cellKey)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                      }}
                    ></button>
                  ) : null}
                </>
              )}
            </div>
          </td>
        );
      })}
    </tr>
  ))}
</tbody>

      </table>
    </div>
  </PanelLayout>
  );
};

export default Clients;
// import React, { useEffect, useReducer } from "react";
// import '../../../src/style.css';
// import makeData from "../../makeData";
// import Table from "../../Table";
// import { randomColor, shortId } from "../../utils"
// import { grey } from "../../Colors"
// import PanelLayout from "../PanelLayout";


//   function reducer(state, action) {
//     switch (action.type) {
//       case "add_option_to_column":
//         const optionIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, optionIndex),
//             {
//               ...state.columns[optionIndex],
//               options: [
//                 ...state.columns[optionIndex].options,
//                 { label: action.option, backgroundColor: action.backgroundColor }
//               ]
//             },
//             ...state.columns.slice(optionIndex + 1, state.columns.length)
//           ]
//         };
//       case "add_row":
//         return {
//           ...state,
//           skipReset: true,
//           data: [...state.data, {}]
//         };
//       case "update_column_type":
//         const typeIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         switch (action.dataType) {
//           case "number":
//             if (state.columns[typeIndex].dataType === "number") {
//               return state;
//             } else {
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 data: state.data.map((row) => ({
//                   ...row,
//                   [action.columnId]: isNaN(row[action.columnId])
//                     ? ""
//                     : Number.parseInt(row[action.columnId])
//                 }))
//               };
//             }
//           case "select":
//             if (state.columns[typeIndex].dataType === "select") {
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 skipReset: true
//               };
//             } else {
//               let options = [];
//               state.data.forEach((row) => {
//                 if (row[action.columnId]) {
//                   options.push({
//                     label: row[action.columnId],
//                     backgroundColor: randomColor()
//                   });
//                 }
//               });
//               return {
//                 ...state,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   {
//                     ...state.columns[typeIndex],
//                     dataType: action.dataType,
//                     options: [...state.columns[typeIndex].options, ...options]
//                   },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 skipReset: true
//               };
//             }
//           case "text":
//             if (state.columns[typeIndex].dataType === "text") {
//               return state;
//             } else if (state.columns[typeIndex].dataType === "select") {
//               return {
//                 ...state,
//                 skipReset: true,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ]
//               };
//             } else {
//               return {
//                 ...state,
//                 skipReset: true,
//                 columns: [
//                   ...state.columns.slice(0, typeIndex),
//                   { ...state.columns[typeIndex], dataType: action.dataType },
//                   ...state.columns.slice(typeIndex + 1, state.columns.length)
//                 ],
//                 data: state.data.map((row) => ({
//                   ...row,
//                   [action.columnId]: row[action.columnId] + ""
//                 }))
//               };
//             }
//           default:
//             return state;
//         }
//       case "update_column_header":
//         const index = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, index),
//             { ...state.columns[index], label: action.label },
//             ...state.columns.slice(index + 1, state.columns.length)
//           ]
//         };
//       case "update_cell":
//         return {
//           ...state,
//           skipReset: true,
//           data: state.data.map((row, index) => {
//             if (index === action.rowIndex) {
//               return {
//                 ...state.data[action.rowIndex],
//                 [action.columnId]: action.value
//               };
//             }
//             return row;
//           })
//         };
//       case "add_column_to_left":
//         const leftIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         let leftId = shortId();
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, leftIndex),
//             {
//               id: leftId,
//               label: "Column",
//               accessor: leftId,
//               dataType: "text",
//               created: action.focus && true,
//               options: []
//             },
//             ...state.columns.slice(leftIndex, state.columns.length)
//           ]
//         };
//       case "add_column_to_right":
//         const rightIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         const rightId = shortId();
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, rightIndex + 1),
//             {
//               id: rightId,
//               label: "Column",
//               accessor: rightId,
//               dataType: "text",
//               created: action.focus && true,
//               options: []
//             },
//             ...state.columns.slice(rightIndex + 1, state.columns.length)
//           ]
//         };
//       case "delete_column":
//         const deleteIndex = state.columns.findIndex(
//           (column) => column.id === action.columnId
//         );
//         return {
//           ...state,
//           skipReset: true,
//           columns: [
//             ...state.columns.slice(0, deleteIndex),
//             ...state.columns.slice(deleteIndex + 1, state.columns.length)
//           ]
//         };
//       case "enable_reset":
//         return {
//           ...state,
//           skipReset: false
//         };
//       default:
//         return state;
//     }
//   }
//   function Clients(){
//     const [state, dispatch] = useReducer(reducer, makeData(10));

//   useEffect(() => {
//     dispatch({ type: "enable_reset" });
//   }, [state.data, state.columns]);

//   return (
//     <PanelLayout>
//        <div
//     style={{
//       width: "100vw",
//       height: "100vh",
//       overflowX: "hidden"
//     }}
//   >
    
//     <div style={{ overflow: "auto", display: "flex" }}>
//       <div
//         style={{
//           flex: "1 1 auto",
//           padding: "1rem",
//           maxWidth: 1000,
//           marginLeft: "auto",
//           marginRight: "auto"
//         }}
//       >
//         <Table
//           columns={state.columns}
//           data={state.data}
//           dispatch={dispatch}
//           skipReset={state.skipReset}
//         />
//       </div>
//     </div>
//     <div
//       style={{
//         height: 140,
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         flexDirection: "column"
//       }}
//     >
     
//     </div>
//   </div>
//   </PanelLayout>
//   )

// }
// export default Clients;
