import { Container, FormControl, MenuItem, InputLabel, Button  } from '@mui/material';
import React, {useState, useEffect} from 'react';
import Select from '@mui/material/Select';
import useAxios from 'axios-hooks'
import { Box } from '@mui/system';
import axios from 'axios';


function Locations() {
  const [chosenGenre, setChosenGenre] = React.useState('');
  const [chosenCategory, setChosenCategory] = React.useState('');
  const [genres, setGenres] = useState([]);
  const [categories, setCategories] = useState([]);


  const [{ data: locationData, loading: locationLoad }] = useAxios(
    "http://localhost:8080/locations/"
  );

  const [{ data: categoryData, loading: categoryLoad }] = useAxios(
    "http://localhost:8080/category/"
  );
  useEffect(() => {
    if (!locationLoad) {
      setGenres(locationData);
      console.log(locationData)
    } 
       }, [locationData]);

    useEffect(() => {
    if (!categoryLoad) {
      setCategories(categoryData);
      console.log(categoryData)
      } 
    }, [categoryData]);

  const moveMusic = () =>{
    axios.get('http://localhost:8080/move/get/files', {
      locationId: chosenGenre,
      categoryId: chosenCategory
    })
  }

  return (
      
    <Container  sx={{mt:4}}>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chosenGenre}
            label="Music location"
            onChange={e=>setChosenGenre(e.target.value)}
          >
            {genres.map((value, index)=>{
              return(
                <MenuItem key={index} value={value.locationId}>{value.locationName}</MenuItem>)
            })}
          </Select>
    </FormControl>

    <FormControl fullWidth sx={{mt:4}}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chosenCategory}
            label="Category"
            onChange={e=>setChosenCategory(e.target.value)}
          >
            
            {categories.map((value, index)=>{
              return(
                <MenuItem key={index} value={value.categoryId}>{value.categoryName}</MenuItem>)
            })}
          </Select>
    </FormControl>
    <Box display="flex" justifyContent="center" alignItems="center">
      <Button variant="contained" sx={{mt:4}} >Move music</Button>
    </Box>
    </Container>
    );
}

export default Locations;