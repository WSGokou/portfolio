// Import Assets
import rng from '../assets/rng.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Indecision App</h3>
                    <img src={rng} alt="Random Option Picker" />
                    <p>Random Option Picker application built using React, webpack, and sass.
                        Hosted using netlify app
                    </p>

                    <a href="https://rngeez.netlify.app" target="_blank" className="button">Site</a>
                    <a href="https://github.com/WSGokou/Indecision-app" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;