

export default function makeData(count) {
  let data = [];
  let options = [];
 

  let columns = [
    {
      id: "Name",
      label: " Name",
      accessor: "Name",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "Add from ",
      label: "Add from ",
      accessor: "addfrom",
      minWidth: 100,
      dataType: "text",
      options: []
    },
    {
      id: "Tags",
      label: "Tags",
      accessor: "Tag",
      width: 80,
      dataType: "number",
      options: []
    },
    {
      id: "InternalId",
      label: "Internal Id",
      accessor: "InternalId",
      width: 300,
      dataType: "text",
      options: []
    },
    {
      id: "client ID",
      label: "Client ID",
      accessor: "client ID",
      dataType: "select",
      width: 200,
      options: options
    },
    {
      id: "1",
      label: "Client qq",
      accessor: "client qq",
      dataType: "select",
      width: 200,
      options: options
    },
    {
      id: "2",
      label: "Client qw",
      accessor: "client qw",
      dataType: "select",
      width: 200,
      options: options
    },
    {
      id: "3",
      label: "Client qwe",
      accessor: "client qwe",
      dataType: "select",
      width: 200,
      options: options
    },
   
    {
      id: "client Portal",
      label: "Client Portal",
      accessor: "client Portal",
      dataType: "select",
      width: 200,
      options: options
    },
    {
      id: 999999,
      width: 20,
      label: "+",
      disableResizing: true,
      dataType: "null"
    }
  ];
  return {columns: columns, data: data, skipReset: false};
}
