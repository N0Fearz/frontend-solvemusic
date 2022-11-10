import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import MaterialTable from 'material-table';
import { Save, ModeEdit, Delete, Add} from '@mui/icons-material'

import axios from 'axios';
import useAxios from 'axios-hooks'

export default function SortSettingTable() {
  const [{ data: dataCallback, loading: loadCallback, error }, refetch] = useAxios(
    "http://localhost:8080/folders/"
  );

    const [locations, setLocations] = useState([]);
    const [state, setState] = useState({
      data: []
});
    useEffect(() => {
      // console.log("test")
    if (!loadCallback) {
      console.log(dataCallback)
      setState({ data: dataCallback });
    } 
       }, [dataCallback]);


  return (
    <MaterialTable
      title="Folders"
      options={{
        search: false,
      }}
      columns={[
        {
          title: 'Name', field: 'folderName',
          },
          {
            title: 'Path', field: 'folderPath',
        },
      ]}
      data={state.data}
      editable={{
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                axios
                    .post(
                      "http://localhost:8080/folders/add",
                      {
                        folderName: newData.folderName,
                        folderPath: newData.folderPath
                      }
                    ).then(res=>{
                      console.log(res)
                      resolve();
                      setState(prevState => {
                          const data = [...prevState.data];
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
                    "http://localhost:8080/folders/edit/" + oldData.folderId,
                    {
                      folderName: newData.folderName,
                      folderPath: newData.folderPath
                    }
                  ).then(res=>{
                    console.log(res)
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
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
                  .delete("http://localhost:8080/folders/delete/" + oldData.folderId)
                  .then(res => {
                    resolve();
                    setState(prevState => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1)
                      return{...oldData, data}
                    })
                  })
              }, 600)
            })
    }}
    />
  )
}
