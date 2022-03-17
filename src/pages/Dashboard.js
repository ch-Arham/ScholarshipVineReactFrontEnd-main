import React, { useState, useRef, useLayoutEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ScrollToTop from "react-scroll-to-top";
import {TopBar, Footer } from '../components/dashboard';
import Initial from '../components/xmlScholar/Initial';

const Dashboard = () => {
    const leftSide = useRef(null);
    const contentpage = useRef(null);
    const [activeLeftSide, setActiveLeftSide] = useState(true)
    const [activeMobLeftSide, setMobActiveLeftSide] = useState(false);
    const onToggleMenu = () => {
        setActiveLeftSide(!activeLeftSide);  
        if(!activeLeftSide) {
            leftSide.current.classList.remove('hidemenu');
            contentpage.current.style.marginLeft = "250px";
        } else {
            leftSide.current.classList.add('hidemenu');
            contentpage.current.style.marginLeft = "70px";
        }  
                    
    } 

    const onToggleMobMenu = () => {
        setMobActiveLeftSide(!activeMobLeftSide);
        if(!activeMobLeftSide) {
            leftSide.current.classList.add('show');
        } else {
            leftSide.current.classList.remove('show');
        } 
    }  
    
    const handleResize = () => {        
        if(leftSide.current.classList.contains('hidemenu')) {
            leftSide.current.classList.remove('hidemenu');
        } 

      }
      useLayoutEffect(() => {
        window.addEventListener("resize", handleResize, false);
      }, []);

    
  return (
      <>
      <ScrollToTop smooth style={{background: 'lightgray', borderRadius:'50%'}} />
        <div id="dashboard">
            <TopBar onToggleMenu={onToggleMenu} onToggleMobMenu={onToggleMobMenu} /> 
            <div className="left-side-menu" ref={leftSide}>                
                    <ul className="list-unstyled ms-4">
                    <li className="mb-2">
                        <Link to="/dashboard">Grants Opportunity List</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="#">About us</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="#">Contact us</Link>
                    </li>
                    <li className="mb-2">
                        <Link to="#">Logout</Link>
                    </li>
                    
                </ul>               
            </div>             
            <div ref={contentpage} className="content-page">
                    <div className="content">
                        {/* <Container fluid> */}
                           <Initial />
                        {/* </Container> */}
                    </div>
                   
                    <Footer/>
                   
            </div>                       
        </div>
      </>
  )
}

export default Dashboard;
