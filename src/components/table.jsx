import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'locationName',
    headerName: 'Location name',
    width: 150,
    editable: true,
  },
  {
    field: 'locationSource',
    headerName: 'Location source',
    width: 150,
    editable: true,
  },
  {
    field: 'locationDestination',
    headerName: 'Location destination',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, locationName: 'Snow', locationSource: 'Jon', locationDestination: 35 },
  { id: 2, locationName: 'Lannister', locationSource: 'Cersei', locationDestination: 42 },
  { id: 3, locationName: 'Lannister', locationSource: 'Jaime', locationDestination: 45 },
  { id: 4, locationName: 'Stark', locationSource: 'Arya', locationDestination: 16 },
  { id: 5, locationName: 'Targaryen', locationSource: 'Daenerys', locationDestination: null },
  { id: 6, locationName: 'Melisandre', locationSource: null, locationDestination: 150 },
  { id: 7, locationName: 'Clifford', locationSource: 'Ferrara', locationDestination: 44 },
  { id: 8, locationName: 'Frances', locationSource: 'Rossini', locationDestination: 36 },
  { id: 9, locationName: 'Roxie', locationSource: 'Harvey', locationDestination: 65 },
];

export default function DenseTable() {

    const [locations, setLocations] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/locations/`)
         .then((response) => setLocations(response.data));
       }, []);


       console.log(locations)

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={locations}
        columns={columns}
        getRowId={(row) => row.locationId}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}