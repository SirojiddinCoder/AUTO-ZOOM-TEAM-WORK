import React from 'react'
import {CarsComponent } from '../../Components/Cars/CarsComponent';
import HomeNav from '../../Components/Navbar/HomeNav';
import Brands from '../../Components/Brands/Brands';


export const Home = () => {
  return (
    <div>
      <HomeNav />
      <Brands />
        <CarsComponent/>
    </div>
  )
}

export default Home;