import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    // Lock body scroll when mobile menu open
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

    // Detect scroll for glass navbar
  useEffect(() => {

  const handleScroll = () => {
    const trigger = document.querySelector(".about-services");
    if (!trigger) return;

    const triggerTop = trigger.getBoundingClientRect().top;

    if (triggerTop <= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="nav-left-desktop">
                <a href="#">HOME</a>
                <a href="#">SERVICES</a>
                <a href="#">ABOUT US</a>
            </div>

            <div className="nav-center">
                <img src="/assets/logo-rad.png" alt="RAD Logo" />
            </div>

            <div className="nav-right-desktop">
                <a href="#" className="contact-btn">NEWSLETTER</a>
                <a href="#" className="contact-btn">CONTACT US</a>
            </div>

            <button
                className={`hamburger ${isOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span><span></span><span></span>
            </button>

            <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <a href="#" onClick={closeMenu}>HOME</a>
                <a href="#" onClick={closeMenu}>SERVICES</a>
                <a href="#" onClick={closeMenu}>ABOUT US</a>
                <a href="#" onClick={closeMenu}>CLIENTS</a>
                <a href="#" className="contact-btn" onClick={closeMenu}>CONTACT US</a>
                <a href="#" className="contact-btn" onClick={closeMenu}>NEWSLETTER</a>
            </nav>
        </header>
    );
};

export default Navbar;