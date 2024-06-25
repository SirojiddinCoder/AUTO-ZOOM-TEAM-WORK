import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import {CarsComponent } from '../../Components/Cars/CarsComponent';

export const Home = () => {
  return (
    <div>
        <Navbar />
        <CarsComponent/>
    </div>
  )
}

export default Home;