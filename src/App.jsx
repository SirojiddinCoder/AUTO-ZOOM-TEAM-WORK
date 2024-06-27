import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Cars from './Pages/Cars/Cars';
import Brand from './Pages/Brand/Brand';
import Services from './Pages/Services/Services';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import SinglePage from './Pages/SinglePage/SinglePage';
import Loader from './Components/Loader/Loader';
import './App.css';
// import CarsInfo from './Pages/CarsInfo/CarsInfo';
import Navbar from './Components/Navbar/Navbar';
// import Navbar from './Components/Navbar/navbar';

function App() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
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
      </Routes>
    </div>
  );
}

export default App;
