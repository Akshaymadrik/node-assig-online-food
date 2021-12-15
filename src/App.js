import './App.css';
//import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import {Register} from './Components/Register';
import {Login} from './Components/Login';
//import Navs from './components/Home';
//import Navs from './components/Navs';
//import Breakfast from './components/breakfast';
import Navs from './Components/Home';
import Breakfast from './Comp/Breakfast';
import All from './Comp/dash';
import Lunch from './Comp/Nonveg';
import Snacks from './Comp/Snacks';
//import Navs from './Components/Home';

function App() {
  return (
    <>
    
    
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/registration" element={<Register/>}/>

        <Route path="/home" element={<Navs/>}/>
        <Route path="/dash" element={<All/>}/>
        <Route path="/breakfast"element={<Breakfast/>}/>
        <Route path="/nonveg" element={<Lunch/>}/>
        <Route path="/snacks" element={<Snacks/>}/>
       
        </Routes>
      </BrowserRouter>

     {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dash" element={<Break />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/nonveg" element={<Lunch />} />
          <Route path="/snacks" element={<Snacks/>} />
        </Routes>
      </BrowserRouter> */}
  </>
  );
}

export default App;
