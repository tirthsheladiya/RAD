import React, { useState, useEffect } from "react";

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
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };
const scrollToSection = (id) => {

  if (!window.lenis) return;

  // HOME should always go to page top
  if (id === "#home") {
    window.lenis.scrollTo(1300, {
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    });
  } else {
    const target = document.querySelector(id);
    if (!target) return;

    window.lenis.scrollTo(target, {
      offset: -120,
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3)
    });
  }

  setIsOpen(false);
};
  return (
    <header className="navbar">
      <div className="nav-left-desktop">
        <a onClick={() => scrollToSection("#home")}>HOME</a>
        <a onClick={() => scrollToSection("#services")}>SERVICES</a>
        <a onClick={() => scrollToSection("#about")}>ABOUT</a>
      </div>
      <div className="nav-center">
        <img src="/assets/final-og-rad-small.gif" alt="RAD Logo" />
      </div>
      <div className="nav-right-desktop">
        <a href="https://licensingradar.beehiiv.com/" className="contact-btn">
          NEWSLETTER
        </a>
        <a className="contact-btn" onClick={() => scrollToSection("#contact")}>
          CONTACT
        </a>
      </div>
      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        id="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
     <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
  <a onClick={() => scrollToSection("#home")}>HOME</a>
  <a onClick={() => scrollToSection("#services")}>SERVICES</a>
  <a onClick={() => scrollToSection("#about")}>ABOUT</a>
  <a className="contact-btn" onClick={() => scrollToSection("#contact")}>CONTACT</a>
  <a className="contact-btn" href="#">NEWSLETTER</a>
</nav>
    </header>
  );
};

export default Navbar;
