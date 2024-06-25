import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';  // Importing the search icon from react-icons
import './navbar.css';
import logo from '../../assets/LOGO.svg';
import US from '../../assets/US.svg';
import RU from '../../assets/RU.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
   <>
    <div className="nav-container">
      <div className="container">
        <div className="flags">
          <img className="flag" src={US} alt="US Flag" />
          <img className="flag" src={RU} alt="RU Flag" />
        </div>
        <div className="search">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <nav className={menuOpen ? 'open' : ''}>
          <ul className='nav-items'>
            <li className='nav-item'>
              <Link to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link to="/cars">Cars</Link>
            </li>
            <li className='nav-item'>
              <Link to="/brand">Brand</Link>
            </li>
            <li className='nav-item'>
              <Link to="/services">Services</Link>
            </li>
            <li className='nav-item'>
              <Link to="/about">About</Link>
            </li>
            <li className='nav-item'>
              <Link to="/contact">Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    {/* <Main /> */}
   
   </>
  );
}

export default Navbar;
