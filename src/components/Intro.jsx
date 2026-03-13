import React from 'react';
import { useEffect } from 'react';
const Intro = () => {
    useEffect(() => {
  const intro = document.querySelector(".intro");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      intro.classList.add("intro-hide-floats");
    } else {
      intro.classList.remove("intro-hide-floats");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
    return (
        <section className="intro" id="intro-section">

            {/* Solid dark cover — hides hero initially */}
            <div id="red-shield" className="red-shield"></div>

            {/* Full-screen SVG mask */}
            <svg
                id="intro-svg"
                className="intro-svg-wrapper"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <defs>
                    <mask id="holeMask">
                        <rect width="100%" height="100%" fill="white" />
                        <g id="mask-elements">
                            {/*
                                Smaller triangle (~half original size):
                                  apex:         429.5, 194
                                  bottom-right: 445.5, 236
                                  bottom-left:  413.5, 236
                                APEX_X = (413.5+445.5)/2 = 429.5
                                APEX_Y = (194+236)/2     = 215
                            */}
                            <path
                                id="intro-triangle"
                                d="M429.5 152.5L463.5 236H398.5L429.5 152.5Z"
                                fill="black"
                            />
                        </g>
                    </mask>
                </defs>

                <g mask="url(#holeMask)">
                    <rect width="100%" height="100%" fill="#22082A" />
                    <g id="logo-wrapper-svg">
                        <image href="/assets/radlogo.png" width="865" height="513" />
                    </g>
                </g>
            </svg>

             <img src="/assets/shirt.png" className="intro-float if-shirt" data-dir="up" alt="" />
            <img src="/assets/gamepad.png" className="intro-float if-gamepad" data-dir="up" alt="" />
            <img src="/assets/cap.png" className="intro-float if-cap" data-dir="up" alt="" />

            <img src="/assets/car.png" className="intro-float if-car" data-dir="down" alt="" />
            <img src="/assets/music.png" className="intro-float if-music" data-dir="down" alt="" />
            <img src="/assets/shoe.png" className="intro-float if-shoe" data-dir="down" alt="" />

               <img src="/assets/scrolldown.png" className="scroll-down" alt="" />
        </section>
    );
};

export default Intro;