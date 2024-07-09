import { useRef, useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import RU from "../../assets/RU1.jpg";
import EN from "../../assets/eng.svg";
import logo from "../../assets/LOGO.svg";
import "./navbar.css";
import HoveredComponent from "./HoveredComponent/HoveredComponent";
import { useTranslation } from "react-i18next";

function Navbar() {
  const navRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [searchActive, setSearchActive] = useState(false);

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { t, i18n } = useTranslation();

  const handleChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage);
  };

  const handleSearch = (e) => {
    e.preventDefault()
    e.target[0].value = "";
    navigate(`/cars/${e.target[0].value}`);
    setSearchActive(!searchActive);
    

  };

  return (
    <header>
      <div className="container">
        <div className="flags">
          <img onClick={() => handleChange('ru')} className="flag1" src={RU} alt="Russian Flag" />
          <img onClick={() => handleChange('en')} className="flag1" src={EN} alt="English Flag" />
        </div>
        <form className="search" onSubmit={handleSearch}>
          <FaSearch className="search-icon" onClick={() => setSearchActive(!searchActive)} />
          <input type="text" placeholder="Search..." className={searchActive ? "search__input" : "search__input2"} />
        </form>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <nav ref={navRef}>
          <div className="nav-container">
            <div className="nav-items" onClick={showNavbar}>
              <Link
                className="nav-item"
                to="/"
                onClick={() => setLoader(false)}
              >
                Home
              </Link>
              <Link
                className="nav-item"
                to="/cars"
                onClick={() => setLoader(false)}
              >
                Cars
              </Link>
              <div
                className="nav-item"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/brand">Brand</Link>
                {isHovered && <HoveredComponent />}
              </div>
              <Link
                className="nav-item"
                to="/services"
                onClick={() => setLoader(false)}
              >
                Services
              </Link>
              <Link
                className="nav-item"
                to="/aboutus"
                onClick={() => setLoader(false)}
              >
                About
              </Link>
              <Link
                className="nav-item"
                to="/contact"
                onClick={() => setLoader(false)}
              >
                Contact
              </Link>
              <Link
                className="nav-item"
                to="/blog"
                onClick={() => setLoader(false)}
              >
                Blog
              </Link>
            </div>
            <a className="nav-tel" href="tel:+971558462124">
              +971 (55) 846 21 24
            </a>
          </div>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
