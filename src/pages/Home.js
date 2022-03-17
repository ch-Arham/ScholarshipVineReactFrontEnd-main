import React from 'react';

import {
    NavBar,
    Hero,  
    Garner, 
    Challenge, 
    Combine, 
    Choose, 
    Scholarships,
    Footer
} from '../components';

// // dummy data
import pagesList  from '../app/data';

const Home = () => {
  return <div className='home'>     
        <NavBar />
        <Hero />
        <Garner/>       
        <Challenge/>       
        <Combine/>       
        <Choose/>       
        <Scholarships pagesList={pagesList}/>
        <Footer/>
  </div>;
}

export default Home;
