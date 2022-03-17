import React,{ useEffect } from 'react';
import axios from 'axios'
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
  } from 'react-router-dom';
// components
// import { NavBar, Footer } from '../components';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

import '../assets/scss/Theme.scss';
import Signup from '../pages/Signup';

const App = () => {    

    // const func = async () => {
    //     const res = await fetch('dataXML.xml');
    //     // const xml = await res.text();
    //     console.log(res);
    // }

    // useEffect(()=>{
    //     func();
    // },[]);


    return (
        <div className="landing">         
            <Router>
                <Routes>                
                    <Route path="/" exact element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>         
            </Router>        

        </div>
    );
};

export default App;