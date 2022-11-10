import { Container } from '@mui/material';
import React, {useState, useEffect} from 'react';
import DenseTable from '../components/locationTable';


function Locations() {

    return (
      
    <Container  sx={{mt:4}}>
      <DenseTable/>
    </Container>
    );
}

export default Locations;