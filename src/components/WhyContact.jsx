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
          <div className="why-rad-text">
            <h2>WHY RAD WORLDWIDE</h2>
            <p>
              We're fandom-led, not product-led. Everything starts with
              community and culture, not SKUs on a shelf. We build IP ecosystems
              where licensing, partnerships, content, merchandise, gaming, and
              experiences work as one connected engine.
            </p><br/>

            <p>
              RAD operates where modern fandom lives: sports, gaming,
              entertainment, and creators. We help brands scale globally while
              staying culturally authentic, respecting local fandoms rather than
              exporting generic templates.
            </p><br/>

            <p>
              Built for the next decade of IP, we go beyond traditional
              licensing. From creator-led brands to gaming integrations and
              experiential collaborations, we bring cultural fluency and a
              global network across the UK, India, MENA, SEA, and Japan.
            </p><br/>

            <p>
              RAD isn't just an agency. It's a bridge between brands, creators,
              and culture.
            </p>
          </div>
          <div className="why-rad-image">
            <img
              src="/assets/whyimg.png"
              className="why-rad-main-img"
              alt="About"
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
            <a href="#" className="newsletter-btn-main">
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

      <section className="contact-section">
        <div className="contact-card">
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>
              Fill the form with your message to get in touch with the team RAD
            </p>
          </div>
          <div className="contact-right">
            <div className="form-group inline-field">
              <label>Name:</label>
              <input type="text" />
            </div>
            <div className="form-group inline-field">
              <label>Email:</label>
              <input type="email" />
            </div>
            <div className="form-group inline-field">
              <label>Services:</label>
              <select defaultValue="select an option">
                <option value="select an option">select an option</option>
              </select>
            </div>
            <div className="form-group message-field">
              <label>Message:</label>
              <textarea rows={3}></textarea>
            </div>
            <button className="submit-btn" type="button">
              Submit
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyContact;
