import React from 'react'
import {CarsComponent } from '../../Components/Cars/CarsComponent';
import HomeNav from '../../Components/Navbar/HomeNav';
import Brands from '../../Components/Brands/Brands';
import { Services } from '../Services/Services';
import { Faq } from '../../Components/Faq/Faq';


export const Home = () => {
  return (
    <div>
      <HomeNav />
      {/* <Brands /> */}
        <CarsComponent/>
        <Services/>
        <Faq/>
    </div>
  )
}

export default Home;