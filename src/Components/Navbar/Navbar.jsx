import { useRef, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import RU from '../../assets/RU1.jpg';
import EN from '../../assets/eng.svg';
import logo from '../../assets/LOGO.svg';
import './navbar.css';
import HoveredComponent from "./HoveredComponent/HoveredComponent";

function Navbar() {
  const navRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [loader, setLoader] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header>
      <div className="container">
        <div className="flags">
          <img className="flag1" src={RU} alt="Russian Flag" />
          <img className="flag1" src={EN} alt="English Flag" />
        </div>
        <div className="search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav ref={navRef}>
          <div className="nav-container">
            <div className="nav-items">
              <Link className="nav-item" to="/" onClick={() => setLoader(false)}>Home</Link>
              <Link className="nav-item" to="/cars" onClick={() => setLoader(false)}>Cars</Link>
              <div
                className="nav-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/brand">Brand</Link>
                {isHovered && <HoveredComponent />}
              </div>
              <Link className="nav-item" to="/services" onClick={() => setLoader(false)}>Services</Link>
              <Link className="nav-item" to="/aboutus" onClick={() => setLoader(false)}>About</Link>
              <Link className="nav-item" to="/contact" onClick={() => setLoader(false)}>Contact</Link>
              <Link className="nav-item" to="/blog" onClick={() => setLoader(false)}>Blog</Link>
            </div>
          </div>
          <a className="nav-tel" href="tel:+971558462124">+971 (55) 846 21 24</a>
        </nav>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
