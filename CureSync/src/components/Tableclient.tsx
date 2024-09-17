import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Tableclient = () => {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "fullName",
      headerName: "Patient Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
    // { field: "firstName", headerName: "First name", width: 130 },
    // { field: "lastName", headerName: "Last name", width: 130 },
    { field: "gender", headerName: "Gender", width: 90 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    { field: "date", headerName: "Admited Date", width: 110 },
    { field: "type", headerName: "Type", width: 100 },
    { field: "status", headerName: "Status", width: 100,
      renderCell: (params) => (
        <div>
         {params.value}
        </div>
      ),
     },
    {
      field: "action",
      headerName: "Action",
      description: "Edit or delete a row",
      sortable: false,
      width: 100,
      renderCell: () => (
        <div>
          <EditIcon color="primary" className="mr-3" />
          <DeleteIcon color="error" />
        </div>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      lastName: "Snow",
      firstName: "Jon",
      age: 35,
      gender: "Male",
      date: "May 3rd",
      type: "Sugar Test",
      status: "pending",
    },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
      gender: "Male",
      date: "May 3rd",
      type: "ECG",
      status: "pending",
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
      gender: "Female",
      date: "May 3rd",
      type: "Checkup",
      status: "pending",
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
      gender: "Female",
      date: "May 3rd",
      type: "Malaria",
      status: "pending",
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: 22,
      gender: "Male",
      date: "May 3rd",
      type: "Typhoid",
      status: "pending",
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 15,
      gender: "Female",
      date: "May 3rd",
      type: "Sugar Test",
      status: "pending",
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
      gender: "Male",
      date: "May 3rd",
      type: "ECG",
      status: "pending",
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
      gender: "Male",
      date: "May 3rd",
      type: "Sugar Test",
      status: "pending",
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
      gender: "Male",
      date: "May 3rd",
      type: "Checkup",
      status: "pending",
    },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
       
      />
    </Paper>
  );
};

export default Tableclient;
