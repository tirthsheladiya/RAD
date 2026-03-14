import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="hero-section" >
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

            <img src="/assets/car.svg" className="float car" alt="car" />
            <img src="/assets/car.svg" className="float car2" alt="car" />
            <img src="/assets/gamepad.svg" className="float gamepad" alt="gamepad" />
            <img src="/assets/shirt.svg" className="float shirt" alt="shirt" />
            <img src="/assets/shirt.svg" className="float shirt2" alt="shirt" />
            <img src="/assets/cap.svg" className="float cap" alt="cap" />
            <img src="/assets/music.svg" className="float music" alt="music" />
            <img src="/assets/music.svg" className="float music2" alt="music" />
            <img src="/assets/shoe.svg" className="float shoe" alt="shoe" />
            <img src="/assets/shoe.svg" className="float shoe2" alt="shoe" />
        </section>
    );
};

export default Hero;
