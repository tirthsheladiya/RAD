import React from "react";

const scrollToSection = (id) => {
  if (!window.lenis) return;

  // Home should always go to top
  if (id === "#home") {
    window.lenis.scrollTo(0, {
      duration: 2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
    });
    return;
  }

  const target = document.querySelector(id);
  if (!target) return;

  // Correct scroll position even with GSAP pinned sections
  const y = target.getBoundingClientRect().top + window.scrollY - 120;

  window.lenis.scrollTo(y, {
    duration: 2,
    easing: (t) => 1 - Math.pow(1 - t, 3),
  });
};
const Footer = () => {
  return (
    <footer className="rad-footer" style={{ paddingTop: "clamp(5rem, 7vw, 7rem)" }}>
      <div className="footer-curve-wrapper">
        <img src="/assets/ellipse 47.png" className="footer-ellipse" alt="" />
      </div>

      <div className="footer-logo">
        <img src="/assets/final-og-rad-small.gif" alt="RAD Logo" />
      </div>

      <div className="footer-links">
        <div className="footer-col">
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#home")}}>Who are we</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#services")}}>Services</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#partners")}}>Who we partner with</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#about")}}>About</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#clients")}}>Projects/Clients</a>
          <a href="#" onClick={(e)=>{e.preventDefault(); scrollToSection("#why-rad")}}>Why Rad Worldwide</a>
        </div>

        <div className="footer-col footer-newsletter">
          <span className="newsletter-title">
            Subscribe to<br/>Licensing Radar<br/>Newsletter
          </span>

          <a
            href="https://licensingradar.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <span className="btn-text">READ THE NEWSLETTER</span>
             <span className="btn-shine"></span>
          <span className="btn-ring"></span>
          </a>
        </div>

        <div className="footer-col footer-col-2">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Accessibility</a>

          <div className="footer-social">
            <span className="social-label">Follow us on</span>

            <div className="social-icons">
              <a href="https://www.linkedin.com/company/rad-worldwide/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linkedinlogo.png" alt="" />
              </a>

              <a href="https://www.instagram.com/licensingradar/" target="_blank" rel="noopener noreferrer">
                <img src="/assets/instagram.png" alt="" />
              </a>

              <a href="https://x.com/licensingradar" target="_blank" rel="noopener noreferrer">
                <img src="/assets/x.png" alt="" />
              </a>

              <a href="https://linktr.ee/radworldwide" target="_blank" rel="noopener noreferrer">
                <img src="/assets/linktree.png" alt="" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom-bar">
        <span className="footer-copy">©RADWORLDWIDE 2026</span>
        <span className="footer-tagline">Let’s build something RAD!</span>
      </div>

    </footer>
  );
};

export default Footer;