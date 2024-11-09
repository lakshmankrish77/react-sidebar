import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';




function CustomDataTable(props) {

  // const options = {
  //   filterType: 'dropdown',
  //   responsive: 'scrollFullHeight',
  //   serverSide: true,
  //   // count: total,
  //   // page: page,
  //   onRowClick: handleRowClick,
  //   onRowsSelect : handleRowSelect
  // }

  const options = {
    filterType: "checkbox",
    rowsPerPage: [3],
    rowsPerPageOptions: [1, 3, 5, 6],
    jumpToPage: true,
    textLabels: {
      pagination: {
        next: "Next >",
        previous: "< Previous",
        rowsPerPage: "Total items Per Page",
        displayRows: "OF",
      },
    },
    onChangePage(currentPage) {
      console.log({ currentPage });
    },
    onChangeRowsPerPage(numberOfRows) {
      console.log({ numberOfRows });
    },
  };

  const handleRowSelectionCheckboxChange = (curRowSelected, allRowsSelected) => {
    alert('clicked Rowselect')
    console.log("Row Selected: ", curRowSelected);
    console.log("All Selected: ", allRowsSelected);
  }

  const handleRowClick = (rowData, rowMeta) => {
    alert('clicked rowClick: '+ rowData.row._id);
    console.log(rowData, rowMeta);
  }
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={props.rows}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowClick={handleRowClick}
        onRowSelectionCheckboxChange={handleRowSelectionCheckboxChange}
      />
    </div>
  );
}
export default CustomDataTable;