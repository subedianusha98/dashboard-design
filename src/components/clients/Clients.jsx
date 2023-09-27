// import React, { useState,useReducer } from 'react';
// import PanelLayout from '../PanelLayout';
// import { Search,Filter,ChevronDown, Calendar,Check,MoreVertical, ChevronsUpDown} from 'lucide-react';
// const dummyImageUrl = 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
// function tableDataReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_ROW':
//       return {
//         ...state,
//         tableData: [...state.tableData, {}],
//       };
//     case 'ADD_COLUMN':
//       const newColumnKey = action.columnKey;
//       return {
//         ...state,
//         tableData: state.tableData.map((row) => ({
//           ...row,
//           [newColumnKey]: '', 
//         })),
//         columnHeaders: [...state.columnHeaders, newColumnKey], 
//       };
//       case 'SET_HIDDEN_COLUMNS':
//         return {
//           ...state,
//           hiddenColumns: action.hiddenColumns,
//         };
  
//     default:
//       return state;
//   }
// }
// const Clients = () => {
//   const [tableDataState, dispatchTableData] = useReducer(tableDataReducer, {
//   tableData: [
//     {
//       name: ' Nisha Giri Puri adc@gmail.com',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
     
//     },
    
//     {
//       name: 'Nisha Giri Puri',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
   
//     },
    
//     {
//       name: 'Nisha Giri Puri',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
      
//     },
    
//     {
//       name: 'Nisha Giri Puri',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
   
//     },
    
//     {
//       name: 'Nisha Giri Puri',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
     
//     },
    
//     {
//       name: 'Nisha Giri Puri',
//       addedFrom: 'System',
//       tags: '-',
//       internalId: 'ID296',
//       clientId: '-',
//       phone: '+9779867****',
//       clientPortal: 'Deactivated',
//       assignee: 'Justin',
     
//     },
    
//   ],
//   columnHeaders: [
//     'name',
//     'addedFrom',
//     'tags',
//     'internalId',
//     'clientId',
//     'phone',
//     'clientPortal',
//     'assignee',
    
//   ],
//   isNewRow: true,
//   hiddenColumns: [], 
// });
//   const [cellEditing, setCellEditing] = useState({
//     name: false,
//     addedFrom: false,
//     tags: false,
//     internalId: false,
//     clientId: false,
//     phone: false,
//     clientPortal: false,
//     assignee: false,
//     followers: false,
//     status: false,
//     applications: false,
//     lastUpdated: false,
//   });

//   const handleCellClick = (cellKey) => {
//     setCellEditing((prevState) => ({
//       ...prevState,
//       [cellKey]: !prevState[cellKey],
//     }));
//   };

//   const handleCellChange = (e, cellKey, rowIndex) => {
//     const updatedData = [...tableDataState.tableData];
//     updatedData[rowIndex][cellKey] = e.target.value;
//     dispatchTableData({ type: 'SET_TABLE_DATA', updatedTableData: updatedData });
//   };
//   const handleAddRow = () => {
//     const newRow = {};
//     tableDataState.columnHeaders.forEach((header) => {
//       newRow[header] = '';
//     });

//     dispatchTableData({ type: 'ADD_ROW', newRow });
//   };
//   const toggleColumnVisibility = (column) => {
    
//     if (tableDataState.hiddenColumns.includes(column)) {
    
//       const updatedHiddenColumns = tableDataState.hiddenColumns.filter((col) => col !== column);
//       dispatchTableData({ type: 'SET_HIDDEN_COLUMNS', hiddenColumns: updatedHiddenColumns });
//     } else {
  
//       const updatedHiddenColumns = [...tableDataState.hiddenColumns, column];
//       dispatchTableData({ type: 'SET_HIDDEN_COLUMNS', hiddenColumns: updatedHiddenColumns });
//     }
//   };
  


//   return (
//     <PanelLayout>
//     <div className="w-[1192px] bg-white overflow-x-auto">
//     <div className="w-[1192px] h-[72px] px-6 border-b bg-white border-violet-100 justify-between items-center inline-flex">
//     <div className="justify-start items-start gap-5 flex">
//         <div className=" px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
//         <Search size={14} />
         
           

//             <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Search Particular</div>
//             <div className='w-6 h-6 relative'/>
//         </div>
//         <div className="justify-start items-start gap-5 flex">
//             <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
//                 <div className="justify-start items-center gap-1.5 flex">
//                 <Filter size={14}  />
              
//                     <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Filter by assigned</div>
//                 </div>
//                 <div className=" w-6 h-6 relative">
//             <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
//                 <option value="" disabled selected hidden></option>
//                 <option value="option1">1</option>
//                 <option value="option2">2</option>
//                 <option value="option3">3</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//             <ChevronDown size={14} />
//             </div>
//         </div>

//             </div>
//             <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
//                 <div className="justify-start items-center gap-1.5 flex">
//                 <Calendar size={14} />
//                     <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Date</div>
//                 </div>
//                 <div className=" w-6 h-6 relative">
//             <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
//                 <option value="" disabled selected hidden></option>
//                 <option value="option1">1</option>
//                 <option value="option2">2</option>
//                 <option value="option3">3</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//             <ChevronDown size={14} />
//             </div>
//         </div>

              
//             </div>
//             <div className="px-2 py-1.5 rounded border border-gray-300 justify-start items-center gap-2 flex">
//                 <div className="justify-start items-center gap-1.5 flex">
//                 <Check size={14} />
//                     <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none">Status</div>
//                 </div>
//                 <div className=" w-6 h-6 relative">
//             <select className="appearance-none bg-transparent border-none text-gray-500 text-xs font-normal font-['Inter'] leading-none outline-none cursor-pointer">
//                 <option value="" disabled selected hidden></option>
//                 <option value="option1">1</option>
//                 <option value="option2">2</option>
//                 <option value="option3">3</option>
//             </select>
//             <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
//             <ChevronDown size={14} />
//             </div>
//         </div>
//             </div>
           
//         </div>
        
//     </div>
//     <div className="justify-start items-center gap-9 flex">
//         <div className="justify-start items-center gap-5 flex">
//             <div className="justify-start items-center gap-1.5 flex">
//                 <div className="w-[18px] h-[18px] relative" />
//                 <Filter size={14}/>
//                 <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Filter</div>
//             </div>
//             <div className="justify-start items-center gap-1.5 flex">
//             <ChevronsUpDown size={14} />
//                 <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Sort</div>
//             </div>
//             <div className="justify-start items-center gap-1.5 flex">
//             <Filter size={14}/>
//                 <div className="text-gray-500 text-xs font-normal font-['Inter'] leading-none cursor-pointer">Saved Filter</div>
//             </div>
//         </div>
//         <div className="text-blue-500 text-sm font-medium font-['Inter'] leading-tight">Clear</div>
//     </div>
// </div>
// <div className="w-[1168px] h-14 py-3  px-3 border-b justify-between items-center inline-flex">
//     <div className="px-3 py-1.5 bg-[#7474C9] rounded justify-start items-center gap-1.5 flex">
      
//         <div className="text-white text-xs font-medium font-['Inter'] leading-none  " onClick={handleAddRow}>New Client</div>
//         <div className="w-3.5 h-3.5 relative" />
//         <ChevronDown size={14} color='white'/>
//     </div>
//     <div className="justify-center items-center flex">
//         <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
//             <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Prospects(18)</div>
//         </div>
//         <div className="px-3 py-1 border-b border-green-400 justify-center items-center gap-2.5 flex">
//             <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Clients(10)</div>
//         </div>
//         <div className="px-3 py-1 justify-center items-center gap-2.5 flex">
//             <div className="text-slate-700 text-xs font-normal font-['Inter'] leading-none">Archived(0)</div>
//         </div>
//     </div>
// </div>
   
//       <table className="w-full border-collapse">
//       <thead >
//   <tr>
//     {tableDataState.columnHeaders.map((header) => {
//       const isColumnHidden = tableDataState.hiddenColumns.includes(header);

//       return (
//         !isColumnHidden && (
//           <th key={header} className="px-6 py-3 border  text-xm  text-gray-700  font-['Inter'] leading-none">
//             <span className="  capitalize  font-['Inter'] leading-none">
//               {header}
//             </span>
//             <button
//               onClick={() => toggleColumnVisibility(header)}
//               className="toggle-visibility-button pl-6"
//             >
//               {isColumnHidden ? 'Show' : <MoreVertical size={12}/>}
//             </button>
//           </th>
//         )
//       );
//     })}
//   </tr>
// </thead>

// <tbody>
//  {tableDataState.tableData.map((rowData, rowIndex) => (
//   <tr key={rowIndex}>
//     {tableDataState.columnHeaders.map((cellKey) => {
//       const isCellHidden = tableDataState.hiddenColumns.includes(cellKey);

//       return (
//         <td
//           key={cellKey}
//           className={`${
//             cellEditing[cellKey]
//               ? 'w-[153px] h-[50px] font-normal text-xs font-[Inter] contentEditable text-gray-700 leading-none border-r border-b border-gray-200 justify-start items-center gap-2.5 inline-flex px-2 py-1.5 border editing'
//               : 'px-2 py-1.5 border'
//           }`}
//         >
//           <div
//             onClick={() => handleCellClick(cellKey)}
//             style={{ cursor: 'pointer', position: 'relative' }}
//           >
//             {cellEditing[cellKey] ? (
//               <input
//                 type="text"
//                 value={rowData[cellKey]}
//                 onChange={(e) => handleCellChange(e, cellKey, rowIndex)}
//                 onBlur={() => setCellEditing({ ...cellEditing, [cellKey]: false })}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Tab') {
//                     e.preventDefault();
//                     const nextCellIndex = tableDataState.columnHeaders.indexOf(cellKey) + 1;
//                     if (nextCellIndex < tableDataState.columnHeaders.length) {
//                       const nextCellKey = tableDataState.columnHeaders[nextCellIndex];
//                       handleCellClick(nextCellKey);
//                     }
//                   }
//                 }}
//               />
//             ) : (
//               <>
//                 {cellKey === 'name' ? (
//                   <div className="flex items-center">
//                     <img
//                       src={dummyImageUrl} 
//                       alt="Name"
//                       className="w-7 h-7 rounded-lg"
//                     />
//                     <div className="ml-2">
//                       <div className="text-gray-900">{rowData.name}</div>
//                       <div className="text-gray-500">{rowData.email}</div>
//                     </div>
//                   </div>
//                 ) : (
//                   <span>{isCellHidden ? '' : rowData[cellKey]}</span>
//                 )}
//                 {cellEditing[cellKey] ? (
//                   <button
//                     onClick={() => handleCellClick(cellKey)}
//                     style={{
//                       background: 'transparent',
//                       border: 'none',
//                       cursor: 'pointer',
//                       position: 'absolute',
//                       top: '0',
//                       right: '0',
//                     }}
//                   ></button>
//                 ) : null}
//               </>
//             )}
//           </div>
//         </td>
//       );
//     })}
//   </tr>
// ))}

// </tbody>

//       </table>
//     </div>
//   </PanelLayout>
//   );
// };

// export default Clients;

import React, { useState } from 'react';
import PanelLayout from '../PanelLayout';
import { Search, Filter, ChevronDown, Calendar, Check, MoreVertical, ChevronsUpDown } from 'lucide-react';

const dummyImageUrl = 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zmxvd2Vyc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';

const Clients = () => {
  const [columns, setColumns] = useState(['Name', 'Age', 'Country']);
  const [newColumnName, setNewColumnName] = useState('');
  const [tableDataState, setTableDataState] = useState({
    tableData: [
      {
              name: ' Nisha Giri Puri adc@gmail.com',
              addedFrom: 'System',
              tags: '-',
              internalId: 'ID296',
              clientId: '-',
              phone: '+9779867****',
              clientPortal: 'Deactivated',
           
             
            },
            
            {
              name: ' Nisha Giri Puri adc@gmail.com',
              addedFrom: 'System',
              tags: '-',
              internalId: 'ID296',
              clientId: '-',
              phone: '+9779867****',
              clientPortal: 'Deactivated',
           
           
            },
            
            {
              name: ' Nisha Giri Puri adc@gmail.com',
              addedFrom: 'System',
              tags: '-',
              internalId: 'ID296',
              clientId: '-',
              phone: '+9779867****',
              clientPortal: 'Deactivated',
             
              
            },
            
            {
              name: ' Nisha Giri Puri adc@gmail.com',
              addedFrom: 'System',
              tags: '-',
              internalId: 'ID296',
              clientId: '-',
              phone: '+9779867****',
              clientPortal: 'Deactivated',
              
           
            },
            
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
              name: ' Nisha Giri Puri adc@gmail.com',
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
         'assignee'
          
        ],
    hiddenColumns: [],
  });

  const [cellEditing, setCellEditing] = useState({});

  const handleCellClick = (cellKey) => {
    setCellEditing((prevState) => ({
      ...prevState,
      [cellKey]: true,
    }));
  };


  const handleCellChange = (e, cellKey, rowIndex) => {
    const updatedData = [...tableDataState.tableData];
    updatedData[rowIndex][cellKey] = e.target.value;
    setTableDataState({
      ...tableDataState,
      tableData: updatedData,
    });
  };

  const handleAddRow = () => {
    const newRow = {};
    tableDataState.columnHeaders.forEach((header) => {
      newRow[header] = '';
    });

    setTableDataState({
      ...tableDataState,
      tableData: [...tableDataState.tableData, newRow],
    });
  };
  const handleAddColumn = () => {
    if (newColumnName.trim() !== '') {
      // Add the new column name to the state
      setColumns([...columns, newColumnName]);

      // Update the table data to include the new column in each row
      const updatedTableData = tableDataState.tableData.map((row) => ({
        ...row,
        [newColumnName.toLowerCase()]: '', // Initialize the new column with empty values
      }));

      // Update the table headers to include the new column
      setTableDataState({
        ...tableDataState,
        tableData: updatedTableData,
        columnHeaders: [...tableDataState.columnHeaders, newColumnName.toLowerCase()],
      });

      // Clear the input field
      setNewColumnName('');
    }
  };


  const toggleColumnVisibility = (column) => {
    if (tableDataState.hiddenColumns.includes(column)) {
      // Show the column
      const updatedHiddenColumns = tableDataState.hiddenColumns.filter((col) => col !== column);
      const columnOrder = tableDataState.columnHeaders.indexOf(column);
      const newColumnHeaders = [...tableDataState.columnHeaders];
      newColumnHeaders.splice(columnOrder, 0, column);
      setTableDataState({
        ...tableDataState,
        hiddenColumns: updatedHiddenColumns,
        columnHeaders: newColumnHeaders,
      });
    } else {
      // Hide the column
      const updatedHiddenColumns = [...tableDataState.hiddenColumns, column];
      const columnOrder = tableDataState.columnHeaders.indexOf(column);
      const newColumnHeaders = [...tableDataState.columnHeaders];
      newColumnHeaders.splice(columnOrder, 1);
      setTableDataState({
        ...tableDataState,
        hiddenColumns: updatedHiddenColumns,
        columnHeaders: newColumnHeaders,
      });
    }
  };

 
  return (
    <PanelLayout>
    <div className="w-auto bg-white overflow-x-auto overflow-y-auto">
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
        <div className="justify-start items-center gap-5 flex">           <div className="justify-start items-center gap-1.5 flex">
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
          <thead>
            <tr>
              {tableDataState.columnHeaders.map((header) => {
                const isColumnHidden = tableDataState.hiddenColumns.includes(header);

                return (
                  !isColumnHidden && (
                    <th key={header} className="px-6 py-3 border text-xm text-gray-700 font-['Inter'] leading-none">
                      <span className="capitalize font-['Inter'] leading-none">
                        {header}
                      </span>
                      
                      <button
                        onClick={() => toggleColumnVisibility(header)}
                        className="toggle-visibility-button pl-5"
                      >
                        {isColumnHidden ? 'Show' : <MoreVertical size={12} />}
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
                  const isEditing = cellEditing[cellKey];

                  const cellClassName = `${
                    isEditing
                      ? 'w-[153px] h-[50px] font-normal text-xs text-gray-700 leading-none justify-start items-center  inline-flex px-2 py-1.5 editing'
                      : 'px-2 py-1.5'
                  }  border-r border-b border-gray-200`;

                  return (
                    <td
                      key={cellKey}
                      className={cellClassName}
                    >
                      <div
                        onClick={() => handleCellClick(cellKey)}
                        style={{ cursor: 'pointer', position: 'relative' }}
                      >
                        {isEditing ? (
                          <input
                            type="text"
                            value={rowData[cellKey]}
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
                            className="font-normal text-xs text-gray-700 leading-none outline-none border-none bg-transparent"
                            style={{ fontFamily: 'Inter', fontSize: '14px' }}
                          />
                        ) : (
                          <>
                            {cellKey === 'name' ? (
                              <div className="flex items-center">
                                <img
                                  src={dummyImageUrl}
                                  alt="Name"
                                  className="w-7 h-7 rounded-lg"
                                />
                                <div className="ml-2">
                                <div className="text-gray-900">{rowData.name}<br />{rowData.email}</div>
                                </div>
                              </div>
                            ) : (
                              <span>{isCellHidden ? '' : rowData[cellKey]}</span>
                            )}
                            {isEditing ? (
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

