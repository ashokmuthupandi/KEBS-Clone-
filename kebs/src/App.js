import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';
import Login from "./Components/Login/Login"
import Timesheet from './Components/Timesheet/Timesheet';
import Expenses from './Components/Expenses/Expenses';

import Sidebar from './Components/Sidebar/Sidebar';
import VisaTravel from './Components/VisaTravel/VisaTravel';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/timesheet" element={<Timesheet />}/>
        <Route path="/expenses" element={<Expenses />}/>
        <Route path="/sidebar" element={<Sidebar />}/>
        <Route path="/Visatravel" element={<VisaTravel />}/>
      </Routes>
    </div>
  );
}

export default App;
