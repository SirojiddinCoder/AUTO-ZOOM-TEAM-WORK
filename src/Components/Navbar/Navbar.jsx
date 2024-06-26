
import { useRef } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import lang from '../../assets/RU1.jpg'
import logo from '../../assets/LOGO.svg'
import './navbar.css'

function Navbar({setLoader}) {
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
				<Link className="nav-item" to="/">Home</Link>
				<Link className="nav-item" to="/cars">Cars</Link>
				<Link className="nav-item" to="/brand">Brand</Link>
				<Link className="nav-item" to="/services">Services</Link>
				<Link className="nav-item" to="/about">About</Link>
				<Link className="nav-item" to="/contact">Contact</Link>
				<Link className="nav-item" to="/blog">Blog</Link>
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
