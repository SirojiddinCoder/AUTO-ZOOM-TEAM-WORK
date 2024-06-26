
import { useRef } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import lang from '../../assets/RU1.jpg'
import logo from '../../assets/LOGO.svg'
import './navbar.css'


function Navbar({setLoader}) {

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';  // Importing the search icon from react-icons

import '../Navbar/navbar.css';

import './navbar.css';

import logo from '../../assets/LOGO.svg';
import US from '../../assets/US.svg';
import RU from '../../assets/RU.svg';

import Main from '../../Components/Main/Main';
import i18n from '../../i18n';



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
				<img className="flag" src={lang} alt="US Flag" />
				<img className="flag" src={lang} alt="RU Flag" />
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
      <div className="home">
        <div className="container">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
		</header>
    </>
	)}

export default Navbar;
