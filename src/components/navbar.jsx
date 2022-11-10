import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{mr:2}}>
            SolveMusic
          </Typography>
          <Button color="inherit">Sort</Button>
          <Button onClick={()=>navigate("/locations")} color="inherit">Find</Button>
          <Button onClick={()=>navigate("/settings")} color="inherit">Settings</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}