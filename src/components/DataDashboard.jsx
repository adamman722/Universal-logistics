import * as React from "react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import data from "../data/MOCK_DATA.json";
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "first_name",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "last_name",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 190,
    editable: true,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 110,
    editable: true,
  },
  {
    field: "ip_address",
    headerName: "IP Address",
    width: 190,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
];

const rows = data;

export default function DataGridDemo() {
  return (
    <Box sx={{ height: 800, width: "1100px", margin: "none" }}>
      <DataGrid
        sx={{
          "& .MuiButtonBase-root.MuiButton-root": {
            color: "black",
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        pageSizeOptions={[9]}
        checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
