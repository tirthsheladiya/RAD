import React from "react";

const WhyContact = () => {
  return (
    <>
      <section className="why-rad">
        <div className="why-rad-glow">
          <img src="/assets/glow.png" alt="" />
        </div>
        <div className="why-card">
          <img src="/assets/glow.png" className="about-card-bg-glow" alt="" />
          <h2 className="why-title">WHY RAD WORLDWIDE</h2>
          <div className="why-rad-text">
            <p>
              We're fandom-led, not product-led. Everything starts with
              community and culture, not SKUs on a shelf. We build IP ecosystems
              where licensing, partnerships, content, merchandise, gaming, and
              experiences work as one connected engine.
            </p>
            <br />

            <p>
              RAD operates where modern fandom lives: sports, gaming,
              entertainment, and creators. We help brands scale globally while
              staying culturally authentic, respecting local fandoms rather than
              exporting generic templates.
            </p>
            <br />

            <p>
              Built for the next decade of IP, we go beyond traditional
              licensing. From creator-led brands to gaming integrations and
              experiential collaborations, we bring cultural fluency and a
              global network across the UK, India, MENA, SEA, and Japan.
            </p>
            <br />

            <p>
              RAD isn't just an agency. It's a bridge between brands, creators,
              and culture.
            </p>
          </div>
          <div className="why-rad-image">
            <img
              src="/assets/whyimg.svg"
              className="why-rad-main-img"
              alt="question mark"
            />
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h2 className="newsletter2-title">
              The Strategic Edge in Modern Licensing
            </h2>
            <p className="newsletter-desc">
              Licensing RADar delivers weekly insights on sports, creators
              entertainment, and IP – focused on what’s changing, why it matters
              and how to act.
            </p>
            <a href="https://licensingradar.beehiiv.com/" className="newsletter-btn-main">
              READ THE NEWSLETTER
            </a>
          </div>
          <div className="newsletter-graphic">
            <img
              src="/assets/thumb_LR_Logo.gif"
              alt="Radar"
              className="newsletter-radar"
            />
          </div>
        </div>
      </section>

      <div className="contact-body">

        <div className="container">

          <h1>CONTACT US</h1>

          <p className="subtitle">
            Whether you're a global brand expanding into new markets or a creator
            turning influence into IP. We will help you build what's next in
            licensing, culture, and fandom.
          </p>

          <form>

            <div className="row">

              <div className="field">
                <label>YOUR NAME</label>
                <input type="text" placeholder="ENTER YOUR NAME" required />
              </div>

              <div className="field">
                <label>CONTACT NUMBER</label>
                <input type="tel" placeholder="ENTER CONTACT NUMBER" required />
              </div>

            </div>

            <div className="row-grp">
            <div className="field subject">
              <label>SUBJECT</label>

              <select required>
                <option value="">SELECT AN OPTION</option>
                <option>General Inquiry</option>
                <option>Project Collaboration</option>
                <option>Support</option>
              </select>

            </div>

            <div className="field">

              <label>MESSAGE</label>

              <textarea
                placeholder="ENTER YOUR MESSAGE"
                required
              ></textarea>

            </div>
            </div>
            <button type="submit">
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>
    </>
  );
};

export default WhyContact;
