import React from 'react';

const Projects = () => {
    const projectsData = [
        { id: 1, src: "/assets/marquee-icon.png", text: <>Action Figures and Toys <br />category ownership & Project <br />Management</> },
        { id: 2, src: "/assets/kid-krish.png", text: <>IP DEVELOPMENT &<br />PROJECT MANAGEMENT</> },
        { id: 3, src: "/assets/XPLORE.png", text: <>GTM strategy &<br />Project Management</> },
        { id: 4, src: "/assets/MLB.png", text: <>GTM strategy (India) &<br />Influencers-based IP Development</> },
        { id: 5, src: "/assets/HRX.png", text: <>Marketing & Category <br /> Expansion</> },
        { id: 6, src: "/assets/CRICKET.png", text: <>GTM startegy, Omni-<br />channel marketing & License acquisition</> }
    ];

    return (
        <section id="clients" className="projects-section" >
            <h2 className="projects-title">PROJECTS/CLIENTS</h2>
            <div className="logo-strip">
                <div className="marquee-track">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div key={idx} className="marquee-item">
                            {projectsData.map((project) => (
                                <div key={project.id} className="logo-wrapper">
                                    <img src={project.src} className="default-img" alt="" />
                                    <div className="hover-text">
                                        <img src={project.src} className="hover-logo" alt="" />
                                        <span>{project.text}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
