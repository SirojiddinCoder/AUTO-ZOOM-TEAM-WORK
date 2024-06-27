import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import Brand from './Pages/Brand/Brand';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import './App.css'
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer';

// import Navbar from './Components/Navbar/navbar';


function App() {
  const [loader, setLoader] = useState(false)
  setTimeout(() => {
    setLoader(true)
  }, 2000);
  return (
    <div>
      {loader ? "" : 
      <Loader/>
      }
      <Navbar setLoader={setLoader}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
