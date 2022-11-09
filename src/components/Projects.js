// Import Assets
import rng from "../assets/rng.png";
import todo from "../assets/todo.png";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>Indecision App</h3>
          <img src={rng} alt="Random Option Picker" />
          <p>
            Random Option Picker application built using React, webpack, and
            sass. Hosted using netlify app
          </p>
          <br />

          <a
            href="https://rngeez.netlify.app"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/WSGokou/Indecision-app"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>
        <div className="projects__card">
          <h3>Todo App</h3>
          <img src={todo} alt="Todo App" />
          <p>
            Todo list application built using Typescript, making use of type
            system and DOM interaction to add todo's to list Hosted on the IPFS
            using fleek
          </p>

          <a
            href="https://gokou-tstodo.on.fleek.co"
            target="_blank"
            className="button"
          >
            Site
          </a>
          <a
            href="https://github.com/WSGokou/typescript-todo"
            target="_blank"
            className="button"
          >
            Code
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
