import React from 'react'
import {CarsComponent } from '../../Components/Cars/CarsComponent';
import HomeNav from '../../Components/Navbar/HomeNav';


export const Home = () => {
  return (
    <div>
      <HomeNav />
        <CarsComponent/>
    </div>
  )
}

export default Home;