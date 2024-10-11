import React, { useState } from "react";
import { IonIcon } from "@ionic/react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'; 


const Header = () => {
  
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        const header = document.querySelector('.header');
        if (!isMenuOpen) {
            header.classList.add('nav-active');
        } else {
            header.classList.remove('nav-active');
        }
    };

    return (
        <header className="header" data-header>
            <div className="container">
                <a href="#">
                    <h1 className="logo">Leyla Ayyubova</h1>
                </a>
                <button className="nav-toggle-btn" aria-label="Toggle Menu" onClick={toggleMenu} data-nav-toggle-btn>
                <FontAwesomeIcon 
                        icon={isMenuOpen ? faTimes : faBars} 
                        className="menu-icon" 
                    />
                </button>
                <nav className={`navbar container ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="navbar-list">
                        <li>
                            <a href="#home" className="navbar-link" data-nav-link>Home</a>
                        </li>
                        <li>
                            <a href="#about" className="navbar-link" data-nav-link>About</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="navbar-link" data-nav-link>Portfolio</a>
                        </li>
                        <li>
                            <a href="#skills" className="navbar-link" data-nav-link>Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="navbar-link" data-nav-link>Contact</a>
                        </li>
                        <li>
                            <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
                        </li>
                        <li>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
