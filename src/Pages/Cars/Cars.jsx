
import React from 'react'
import CarsFilter from '../../Components/CarsFilter/CarsFilter'

const Cars = ({cars, setCars}) => {
  return (
    <div>
      <CarsFilter cars={cars} setCars={setCars}/>

import CarsFilter from "../../Components/CarsFilter/CarsFilter";

const Cars = () => {

  return (
    <div>
      <CarsFilter />

    </div>
  );
};

export default Cars;
