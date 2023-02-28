import './App.css';
import NavBar from './components/navbar';
import Locations from './pages/Locations';
import Settings from './pages/Settings';
import React from 'react';
import {
  Routes,
  Route,
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
