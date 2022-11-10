import { Container, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import LocationTable from '../components/locationTable';
import SortSettingTable from '../components/sortSettingTable';


function Settings() {

    return (
      
    <Container  sx={{mt:4}}>
      <Grid spacing={2}>
        <Grid item>
          <LocationTable/>
        </Grid>
        <Grid item>
          <SortSettingTable sx={{mt:4}}/>
        </Grid>
      </Grid>

    </Container>
    );
}

export default Settings;