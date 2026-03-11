import React from "react";

const AboutServices = () => {
  return (
    <section className="about-services " >
      <div className="about-services-glow" >
        <img src="/assets/glow.png" alt="" />
      </div>
      <div className="about-card" id="about">
        <img src="/assets/glow.png" className="about-card-bg-glow" alt="" />
        <h2 className="about-title">ABOUT US</h2>
        <div className="about-text">
          <p>
            We're a new generation licensing and brand partnerships agency built
            for a world where culture moves fast and fandom drives value.
          </p>
          <br />

          <p>
            Our experience spans sports marketing, entertainment licensing,
            retail innovation, and digital culture. We work across India, the
            UK, GCC, and Southeast Asia, helping global IPs localise smartly and
            local IPs go global.
          </p>
          <br />
          <p>
            We speak the language of both brands and fans. We know that IP today
            isn't just about protection, it's about participation.
          </p>
          <br />
          <p>
            From sports rights holders and anime studios to creators and
            lifestyle brands, we work with partners who want to build meaning,
            not just merch.{" "}
          </p>
        </div>
        <div className="about-image">
          <img
            src="/assets/aboutus-img.svg"
            className="about-main-img"
            alt="About"
          />
        </div>
      </div>

      <div className="founder-section">
        <img src="/assets/gamepad.svg" className="founder-gamepad" alt="gamepad" />
        <img src="/assets/cap.svg" className="founder-car" alt="cap" />
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
              <a href="mailto:hello@radworldwide.com" className="mail-icons">
                <img
                  className="mail"
                  src="/assets/mail (1).png"
                  alt="mail icon"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/nileshdeshmukh14/"
                target="_blank"
                rel="noopener noreferrer"
                className="mail-icons"
                aria-label="LinkedIn Profile"
              >
                <img src="/assets/linkedin.png" alt="linkedin icon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="service-stack-scene" id="services">
        <h2 className="services-title">SERVICES</h2>
        <div className="service-stack-inner">
          <div className="service-card premium-card" data-card="6">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">06</span>
              <h3>
                Program Management
                <br />& Execution Oversight
              </h3>
              <p>
                We manage complexity across regions, categories, and partners —
                ensuring strategies translate into consistent execution while
                keeping clients aligned and in control.
              </p>
            </div>
            <img src="/assets/gamepad.svg" className="premium-car" alt="gamepad" />
          </div>
          <div className="service-card premium-card" data-card="5">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">05</span>
              <h3>
                Partnerships, Brand Sales
                <br />& Collaborations
              </h3>
              <p>
                We unlock growth through strategic partnerships — from
                creator-led licensing and co-branded products to limited-edition
                drops and cultural collaborations that expand reach and drive
                revenue.
              </p>
            </div>
            <img src="/assets/cap.svg" className="premium-car" alt="Cap" />
          </div>
          <div className="service-card premium-card" data-card="4">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">04</span>
              <h3>
                Go-To-Market
                <br />& Omni-Channel Activation
              </h3>
              <p>
                We turn demand into revenue. From launch strategy to D2C,
                retail, and partner channels, we help clients activate, scale,
                and monetise across ecosystems with clarity and control.
              </p>
            </div>
            <img src="/assets/shirt.svg" className="premium-car" alt="shirt" />
          </div>
          <div className="service-card premium-card" data-card="3">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">03</span>
              <h3>
                Brand , Content
                <br />& Create Advisory
              </h3>
              <p>
                We shape brands and content systems that convert attention into
                demand. From positioning and storytelling to creative direction,
                we ensure every output strengthens IP value and monetisation.
              </p>
            </div>
            <img src="/assets/shoe.svg" className="premium-car" alt="shoes" />
          </div>

          <div className="service-card premium-card" data-card="2">
            <img src="/assets/glow.png" className="premium-glow-left" alt="" />
            <img src="/assets/glow.png" className="premium-glow-right" alt="" />
            <img src="/assets/grid.png" className="premium-grid" alt="" />
            <div className="service-content premium-content">
              <span className="premium-number">02</span>
              <h3>
                International Market Entry &<br />
                Expansion
              </h3>
              <p>
                We design territory-specific market entry models that balance
                speed, control, and long-term value — helping brands expand
                globally while staying culturally relevant.
              </p>
            </div>
            <img
              src="/assets/music.svg"
              className="premium-car"
              alt="Music"
            />
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
            <img src="/assets/car.svg" className="premium-car" alt="Car" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServices;
