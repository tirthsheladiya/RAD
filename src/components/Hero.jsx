import React from 'react';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-content">
                <div className="tag-pill">Relevance, Access & Distribution</div>
                <h1>Fandom is the new frontier<br />of brand growth.</h1>
                <p>
                    Fandom is the new frontier of growth, and RAD Worldwide leads it by
                    connecting sports, entertainment, and creator IPs with fans through
                    meaningful products and collaborations.
                    We go beyond licensing to build cultural connections that turn attention
                    into loyalty and relevance into revenue.
                </p>
            </div>

            <img src="/assets/car.svg" className="float car" alt="" />
            <img src="/assets/car.svg" className="float car2" alt="" />
            <img src="/assets/gamepad.svg" className="float gamepad" alt="" />
            <img src="/assets/shirt.svg" className="float shirt" alt="" />
            <img src="/assets/shirt.svg" className="float shirt2" alt="" />
            <img src="/assets/cap.svg" className="float cap" alt="" />
            <img src="/assets/music.svg" className="float music" alt="" />
            <img src="/assets/music.svg" className="float music2" alt="" />
            <img src="/assets/shoe.svg" className="float shoe" alt="" />
            <img src="/assets/shoe.svg" className="float shoe2" alt="" />
            {/* <img src="/assets/scrolldown.png" className="scroll-down" alt="" /> */}
        </section>
    );
};

export default Hero;
