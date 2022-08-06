import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import {Home} from "./pages/Home"
import Random from "./pages/Random"
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/random" element = {<Random/>}/>
      </Routes>
    </div>
  );
}

export default App;
