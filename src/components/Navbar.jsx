import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className="navbar">
            <div className="nav-left-desktop">
                <a href="#home">HOME</a>
                <a href="#services">SERVICES</a>
                <a href="#about">ABOUT</a>
            </div>
            <div className="nav-center">
                <img src="/assets/final-og-rad-small.gif" alt="RAD Logo" />
            </div>
            <div className="nav-right-desktop">
                <a href="#newsletter" className="contact-btn">NEWSLETTER</a>
                <a href="#contact" className="contact-btn">CONTACT</a>
            </div>
            <button
                className={`hamburger ${isOpen ? 'active' : ''}`}
                id="hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span><span></span><span></span>
            </button>
            <nav className={`nav-menu ${isOpen ? 'active' : ''}`} id="navMenu">
                <a href="#home" onClick={closeMenu}>HOME</a>
                <a href="#services" onClick={closeMenu}>SERVICES</a>
                <a href="#about" onClick={closeMenu}>ABOUT</a>
                <a href="#clients" onClick={closeMenu}>CLIENTS</a>
                <a href="#contact" className="contact-btn" onClick={closeMenu}>CONTACT</a>
                <a href="#newsletter" className="contact-btn" onClick={closeMenu}>NEWSLETTER</a>
            </nav>
        </header>
    );
};

export default Navbar;
