import React from 'react'
import {CarsComponent } from '../../Components/Cars/CarsComponent';
import HomeNav from '../../Components/Navbar/HomeNav';
import Brands from '../../Components/Brands/Brands';
import { Services } from '../Services/Services';
import { Faq } from '../../Components/Faq/Faq';
// import { Contact } from '../Contact/Contact';
// import { HoveredComponent } from '../../Components/Navbar/HoveredComponent/HoveredComponent';


export const Home = () => {
  return (
    <div>
      <HomeNav />
      <Brands />
        <CarsComponent/>
        <Services/>
        <Faq/>
        {/* <HoveredComponent/> */}
    </div>
  )
}

export default Home;