import React from "react";

const Partners = () => {
  return (
    <section className="partners-section">
      <div className="partners-glow">
        <img src="/assets/glow.png" alt="" />
      </div>

      <h2 className="partners-title">WHO WE PARTNER WITH</h2>
      <div className="partners-row row-2">
        <div className="partner-card1">
          <div className="card-inner">
            <img src="/assets/shirt.svg" className="partner-main-img" alt="shirt" />
            <img src="/assets/glow.png" className="partner-glow" alt="" />
          </div>
          <span className="card-number">01</span>
          <h3>Sports & Entertainment Rights Holders</h3>
          <p>
            Leagues, teams, studios, and independent sports media (soccer,
            cricket) looking to localise content, launch fan engagement
            initiatives, and monetise IP.
          </p>
        </div>
        <div className="partner-card2">
          <div className="card-inner">
            <img
              src="/assets/gamepad.svg"
              className="partner-main-img"
              alt="gamepad"
            />
            <img src="/assets/glow.png" className="partner-glow" alt="" />
          </div>
          <span className="card-number">02</span>
          <h3>Gaming Teams & Gamers</h3>
          <p>
            Competitive and community-driven gaming organisations, esports
            teams, and individual players seeking licensing, merchandising, and
            collaboration opportunities.
          </p>
        </div>
      </div>

      <div className="partners-row row-3">
        <div className="partner-card3">
          <div className="card-inner">
            <img src="/assets/cap.svg" className="partner-main-img" alt="cap" />
            <img src="/assets/glow.png" className="partner-glow" alt="" />
          </div>
          <span className="card-number">03</span>
          <h3>Brands & Partners</h3>
          <p>
            Companies aiming to collaborate with creators, athletes, and IPs to
            deliver co-branded products, activations, and campaigns.
          </p>
        </div>

        <div className="partner-card4">
          <div className="card-inner">
            <img src="/assets/car.svg" className="partner-main-img" alt="car" />
            <img src="/assets/glow.png" className="partner-glow" alt="" />
          </div>
          <span className="card-number">04</span>
          <h3>Digital & Content IPs</h3>
          <p>
            Growing digital-first brands, podcasts, and independent media
            ventures looking to expand reach, merchandise, and fan engagement.
          </p>
        </div>

        <div className="partner-card5">
          <div className="card-inner">
            <img src="/assets/music.svg" className="partner-main-img" alt="music" />
            <img src="/assets/glow.png" className="partner-glow" alt="" />
          </div>
          <span className="card-number">05</span>
          <h3>Creators & Talent</h3>
          <p>
            Independent artists, gamers, and content creators building long-term
            IPs, merchandise lines, and collaborations.
          </p>
        </div>
      </div>
      <div className="partners-glow2">
        <img src="/assets/glow.png" alt="" />
      </div>
    </section>
  );
};

export default Partners;
