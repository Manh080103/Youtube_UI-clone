import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React, { Component }  from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
