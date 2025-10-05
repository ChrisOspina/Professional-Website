import React from "react";
import * as images from "../include/images.js";

const ProjectsPage = () => {
  return (
    <div>
      <section id="projects" className="section scrollspy">
        <h2 className="section-heading">Projects</h2>
        <div className="container">
          <div className="row">
            <div class="col s12 m6 l6">
              <div class="card">
                <div class="card-content">
                  <ul id="projects-list">
                    <li>
                      <a
                        aria-label="Chest X-ray web app"
                        href="https://github.com/ChrisOspina/2024S-Med-X"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="project-img"
                          id="med-x"
                          alt="Chest X-ray web app"
                          src={images.Medxlogo}
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Healthy Eating meal planner mobile app"
                        href="https://github.com/ChrisOspina/Final-CS639"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          className="project-img"
                          id="plateperf"
                          alt="PlatePerfect app"
                          src={images.platePerflogo}
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
