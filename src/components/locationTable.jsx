import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from 'material-table';
import { Save, ModeEdit, Delete, Add} from '@mui/icons-material'

import axios from 'axios';
import useAxios from 'axios-hooks'

export default function LocationTable() {
  const [{ data: dataCallback, loading: loadCallback, error }, refetch] = useAxios(
    "http://localhost:8080/locations/"
  );

    const [locations, setLocations] = useState();
    const [state, setState] = useState({
      data: []
});
    useEffect(() => {
    if (!loadCallback) {
      setLocations(dataCallback );
    } 
       }, [dataCallback]);


  return (
    <div>
    {!dataCallback ? <p>Loading...</p> :
    
    
    
    <MaterialTable
      title="Filelocations"
      options={{
        search: false,
      }}
      columns={[
        {
          title: 'Name', field: 'locationName',
          },
          {
            title: 'Source', field: 'locationSource',
        },
        {
          title: 'Destination', field: 'locationDestination',
      },
      ]}
      data={locations !== [] ? locations : [] }
      editable={{
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                    .post(
                      "http://localhost:8080/locations/add",
                      {
                        locationName: newData.locationName,
                        locationSource: newData.locationSource,
                        locationDestination: newData.locationDestination
                      }
                    ).then(res=>{
                      console.log(res)
                      resolve();
                      setLocations(prevState => {
                          const data = [...prevState];
                          console.log(newData);
                          data.push(newData);
                          return {...prevState, data};
                        });
                    })
            }, 600);
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                if(oldData){
                  axios
                  .put(
                    "http://localhost:8080/locations/edit/" + oldData.locationId,
                    {
                      locationName: newData.locationName,
                      locationSource: newData.locationSource,
                      locationDestination: newData.locationDestination
                    }
                  ).then(res=>{
                    console.log(res)
                    resolve();
                    setLocations(prevState => {
                      const data = [...prevState];
                      data[data.indexOf(oldData)] = newData;
                      return {...prevState, data};
                    });
                  })
                }
              }, 600);
            }),
        onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve();
                axios
                  .delete("http://localhost:8080/locations/delete/" + oldData.locationId)
                  .then(res => {
                    resolve();
                    setLocations(prevState => {
                      const data = [...prevState];
                      data.splice(data.indexOf(oldData), 1)
                      return{...oldData, data}
                    })
                  })
              }, 600)
            })
    }}
    />
  }
    </div>
  )
}