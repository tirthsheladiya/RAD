import React from 'react';

const Projects = () => {
    return (
        <section className="projects-section" id="clients">
            <h2 className="projects-title">PROJECTS/CLIENTS</h2>
            <div className="logo-strip">
                <div className="marquee-track">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div key={idx} className="marquee-item">
                            
                            <div className="logo-wrapper">
                                <img src="/assets/marquee-icon.png" className="default-img" alt="" />
                                <div className="hover-text">Action Figures and Toys <br />category ownership & Project <br />Management</div>
                            </div>
                            <div className="logo-wrapper">
                                <img src="/assets/kid-krish.png" className="default-img" alt="" />
                                <div className="hover-text">IP DEVELOPMENT &<br />PROJECT MANAGEMENT</div>
                            </div>
                            <div className="logo-wrapper">
                                <img src="/assets/XPLORE.png" className="default-img" alt="" />
                                <div className="hover-text">GTM strategy &<br />Project Management</div>
                            </div>
                            <div className="logo-wrapper">
                                <img src="/assets/MLB.png" className="default-img" alt="" />
                                <div className="hover-text">GTM strategy (India) &<br />Influencers-based IP Development</div>
                            </div>
                            <div className="logo-wrapper">
                                <img src="/assets/HRX.png" className="default-img" alt="" />
                                <div className="hover-text">Marketing & Category <br /> Expansion</div>
                            </div>
                            <div className="logo-wrapper">
                                <img src="/assets/CRICKET.png" className="default-img" alt="" />
                                <div className="hover-text">GTM startegy, Omni-<br />channel marketing & License acquisition</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
