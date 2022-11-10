import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import DenseTable from './components/locationTable';
import { Container } from '@mui/system';
import Locations from './pages/Locations';
import Settings from './pages/Settings';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
    <NavBar />
        <Routes>
          <Route element={<Locations />} path="/locations" />
          <Route element={<Settings />} path="/settings" />
        </Routes>
    </React.Fragment>
  );
}

export default App;
