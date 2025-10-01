import React from "react";

const EducationPage = () => {
  return (
    <div>
      <section id="education" className="section scrollspy">
        <h2 className="section-heading">Education</h2>
        <div className="container">
          <div className="row">
            <div class="col s12 m6 l6">
              <div class="card" id="farmingdale">
                <div class="card-content">
                  <a
                    className="company-name"
                    href="https://www.farmingdale.edu/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Farmingdale State College
                  </a>
                  <p>Farmingdale, NY</p>
                  <hr />
                  <p>
                    <b>Degree: </b>Bachelor of Science in Computer Programming &
                    Information Systems
                  </p>
                  <ul>
                    <p>
                      <b>Relevant Coursework:</b>
                      <ul>
                        <li>Web Database Development</li>
                        <li>Data Structures</li>
                        <li>Systems Analysis & Design</li>
                        <li>SQL Programming</li>
                        <li>Unix Operating Systems</li>
                        <li>Introduction to Algortihms</li>
                        <li>Cybersecurity</li>
                      </ul>
                    </p>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="card-content" id="pace">
                  <a
                    className="company-name"
                    href="https://www.pace.edu/seidenberg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Seidenberg School of Computer Science and Information
                    Systems - Pace University
                  </a>
                  <p>New York, NY</p>
                  <hr />
                  <p>
                    <b>Degree: Masters of Science in Computer Science</b>
                  </p>

                  <ul>
                    <p>
                      <b>Relevant Coursework:</b>
                      <ul>
                        <li>Algorithms</li>
                        <li>Database Management Systems</li>
                        <li>Internet Concepts & Structures</li>
                        <li>Python Programming</li>
                        <li>Game Programming</li>
                        <li>Artificial Intelligence</li>
                      </ul>
                    </p>
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

export default EducationPage;
