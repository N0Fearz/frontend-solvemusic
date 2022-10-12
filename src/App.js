import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import DenseTable from './components/table';
import { Container } from '@mui/system';
import Locations from './pages/Locations';

function App() {
  return (
    <>
      <NavBar />
      <Locations />
    </>
  );
}

export default App;
