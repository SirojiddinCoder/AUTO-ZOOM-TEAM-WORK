import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import Brand from './Pages/Brand/Brand';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import './App.css'
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';

import { Services } from './Pages/Services/Services';
import { SportCarRent } from './Pages/Services/sport_car_rent/SportCarRent';
import { Photoshoot } from './Pages/Services/photoshoot/Photoshoot';
import { AboutUs } from './Pages/AboutUs/AboutUs';
import SinglePage from './Pages/SinglePage/SinglePage';

// import Navbar from './Components/Navbar/navbar';

import Footer from './Components/Footer/Footer';


function App() {
  const [loader, setLoader] = useState(false)
  setTimeout(() => {
    setLoader(true)
  }, 2000);
  return (
    <div>
      {loader ? (
        <>
          <Navbar setLoader={setLoader} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/carsdetails/:id" element={<SinglePage />} />
            <Route path="*" element={<Home />} />
            <Route path="/sport_car_rent" element={<SportCarRent />} />
            <Route path="/photoshoot" element={<Photoshoot />} />
       
          </Routes>
          <Footer/>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
