import React from "react";

const AboutServices = () => {
  return (
    <section className="about-services">
      <div className="about-services-glow">
        <img src="/assets/glow.png" alt="" />
      </div>
      <div className="about-card">
        <img src="/assets/glow.png" className="about-card-bg-glow" alt="" />
        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            Fandom is the new frontier of growth, and RAD Worldwide leads it by
            connecting sports, entertainment, and creator IPs with fans through
            meaningful products and collaborations. We go beyond licensing to
            build cultural connections that turn attention into loyalty and
            relevance into revenue.
          </p>
        </div>
        <div className="about-image">
          <img
            src="/assets/aboutus-img.png"
            className="about-main-img"
            alt="About"
          />
        </div>
      </div>

      <div className="founder-section">
        <img src="/assets/gamepad.png" className="founder-gamepad" alt="" />
        <img src="/assets/cap.png" className="founder-car" alt="" />
        <div className="founder-card">
          <div className="left">
            <img
              src="/assets/founder-photo.png"
              className="founder-photo"
              alt=""
            />
            <img
              src="/assets/founder-glow.png"
              className="founder-glow"
              alt=""
            />
          </div>
          <div className="right">
            <div className="founder-title">
              <h2>MEET THE FOUNDER</h2>
            </div>
            <div className="founder-text">
              <p>
                Hi, I’m Nilesh — a fan economy strategist.
                <br />
                <br />
                I work at the intersection of fandom, licensing, market
                expansion, and culture, helping sports teams, leagues, and
                entertainment IP owners turn fan passion into structured
                commercial opportunities.
                <br />
                <br />
                From market entry strategies to licensing programs and consumer
                product ecosystems, my focus is on helping global properties
                grow in emerging fan markets like India while building deeper,
                more valuable relationships with fans.
                <br />
                <br />
                Translating fan culture into a scalable business is still a
                relatively unexplored space in sports.
                <br />
                <br />
                That’s the work I do through RAD Worldwide.
              </p>
            </div>
            <div className="mail-container">
                <div className="mail-icons">
                    <img className="mail" src="/assets/mail (1).png" alt="mail icon"></img>
                </div>
                <div className="mail-icons">
                    <img src="/assets/linkedin.png" alt="mail icon"></img>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="service-stack-scene">
        <h2 className="services-title">SERVICES</h2>
        <div className="service-stack-inner">
          <div className="service-card premium-card" data-card="4">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">04</span>
              <h3>
                Fan Engagement
                <br />& Community
              </h3>
              <p>
                We design fan-first experiences that go beyond content —
                activations, drops, and community programmes that turn passive
                audiences into active brand advocates and long-term revenue
                streams.
              </p>
            </div>
            <img src="/assets/cap.png" className="premium-car" alt="Cap" />
          </div>

          <div className="service-card premium-card" data-card="3">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">03</span>
              <h3>
                Creator & Talent
                <br />
                IP Development
              </h3>
              <p>
                We work with creators and talent to build sustainable IP
                ecosystems — from merchandise strategy and brand partnerships to
                long-term licensing structures that grow with their audience.
              </p>
            </div>
            <img
              src="/assets/gamepad.png"
              className="premium-car"
              alt="Gamepad"
            />
          </div>

          <div className="service-card premium-card" data-card="2">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">02</span>
              <h3>
                Brand & IP
                <br />
                Partnerships
              </h3>
              <p>
                We connect brands with the right sports, entertainment, and
                creator IPs to build co-branded products and campaigns that feel
                culturally authentic and drive measurable commercial results.
              </p>
            </div>
            <img src="/assets/shirt.png" className="premium-car" alt="Shirt" />
          </div>

          <div className="service-card premium-card" data-card="1">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">01</span>
              <h3>
                Licensing Strategy
                <br />& Commercial Design
              </h3>
              <p>
                We build licensing strategies that scale. From IP positioning
                and category planning to territory strategy and deal structures,
                we align creative ambition with revenue goals — creating clear,
                decision-ready roadmaps for growth.
              </p>
            </div>
            <img src="/assets/car.png" className="premium-car" alt="Car" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
