import { useRef } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import RU from '../../assets/RU1.jpg'
import EN from '../../assets/EN.png'
import logo from '../../assets/LOGO.svg'
import './navbar.css'
import HomeNav from "./HomeNav";
function Navbar() {

  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
   <>
    <header>
      <div className="container">
      <div className="flags">
        <img className="flag1" src={RU} alt="US Flag" />
        <img className="flag2" src={EN} alt="RU Flag" />
      </div>
      <div className="search">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav ref={navRef}>
        <Link className="nav-item" to="/" onClick={()=>setLoader(false)}>Home</Link>
        <Link className="nav-item" to="/cars" onClick={()=>setLoader(false)}>Cars</Link>
        <Link className="nav-item" to="/brand" onClick={()=>setLoader(false)}>Brand</Link>
        <Link className="nav-item" to="/services" onClick={()=>setLoader(false)}>Services</Link>
        <Link className="nav-item" to="/about" onClick={()=>setLoader(false)}>About</Link>
        <Link className="nav-item" to="/contact" onClick={()=>setLoader(false)}>Contact</Link>
        <Link className="nav-item" to="/blog" onClick={()=>setLoader(false)}>Blog</Link>
        <a className="nav-tel" href="tel: +971 (55) 846 21 24">+971 (55) 846 21 24</a>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <FaBars />
      </button>
      </div>
      {/* <HomeNav /> */}
    </header>
    </>
  )}

export default Navbar;
