import React from "react";

const ExperiencePage = () => {
  return (
    <div>
      <section id="experience" className="section scrollspy">
        <h2 className="section-heading">Experience</h2>
        <br />
        <div class="container">
          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col sm 4">
                  <a
                    class="company-name"
                    href="https://www.saberin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saberin Systems
                  </a>
                </div>
              </div>
              <div>
                <div class="role-text">Professional Development Intern</div>
                <ul>
                  <li>
                    Developed a landing page application for the company’s data
                    platform
                  </li>
                  <li>
                    Utilized Debugging and best practices to ensure code works
                    properly
                  </li>
                  <li>Troubleshooted issues with applications</li>
                  <li>
                    Created an Azure Service Bus trigger function to migrate
                    data between applications
                  </li>
                  <li>
                    Implemented On behlaf of the User (OBO) flow to ensure that
                    the user recieves their data
                  </li>
                  <li>
                    <b>Tools:</b> C#, TelerikUI, Jira, BitBucket, Visual Studio,
                    Azure, .NET Framework
                  </li>
                </ul>
                <div>
                  <span class="date-text">
                    Sep 2024 - Dec 2024 | Hauppauge, NY
                  </span>
                </div>
              </div>
              <hr />
              <div>
                <div class="role-text">Entry Level Developer</div>
                <ul>
                  <li>
                    Worked with other developers to discuss future improvements
                    to existing AI applications
                  </li>
                  <li>
                    Thoroughly tested and reviewed other developers’ code to
                    determine whether a ticket is to be moved forward in the
                    SDLC
                  </li>
                  <li>Troubleshooted issues with applications</li>
                  <li>
                    Utilized Api connectors to allow the company's central AI
                    application to communicate with others
                  </li>
                  <li>
                    Rectified programming errors from major updates to ensure
                    the program works as intended.
                  </li>
                  <li>
                    <b>Tools:</b> C#, TelerikUI, JavaScript, Tailwind CSS, Jira,
                    BitBucket, Visual Studio, .NET Framework
                  </li>
                </ul>
                <div>
                  <span class="date-text">
                    Sep 2024 - Dec 2024 | Hauppauge, NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col sm 4">
                  <a
                    class="company-name"
                    href="https://www.nhca.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    National Healthcare Associates Inc
                  </a>
                </div>
              </div>
              <div class="role-text">Junior Systems Administrator</div>
              <ul>
                <li>
                  Performed software maintenance & cleanup procedures to dispose
                  of old stored data, ensuring hardware security & maintenance
                  through configuring & encrypting laptops & Apple products for
                  secure remote use.
                </li>
                <li>
                  Organized server room to comply with safety protocols & test
                  device functionality
                </li>
                <li>
                  Facilitated employee report generation through web forms using
                  PHP Form Builder, editing code with VS Code.
                </li>
                <li>
                  Developed a web application to store & display employee,
                  facility, procurement, & invoice data
                </li>
                <li>
                  Automated data insertion from flat csv file into SQL database.
                </li>
                <li>
                  <b>Tools:</b> MySQL, VS Code, PHP, Apache, JavaScript,
                  Bootstrap, DataTables
                </li>
              </ul>
            </div>
            <span class="date-text">
              March 2020 - Jan 2023 | Valley Stream, NY
            </span>
          </div>

          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col sm 4">
                  <a
                    class="company-name"
                    href="https://www.sastechnologies.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SAS Technologies
                  </a>
                </div>
              </div>
              <div class="role-text">Project Assistant</div>
              <ul>
                <li>
                  Configure card readers for school residence halls, assisting
                  in equipment tally for camera & card reader installations.
                </li>
                <li>
                  Generate networking cable labels, programming security cameras
                  by establishing circuit & configuring settings via app to
                  ensure safety of institution & students.
                </li>
                <li>
                  <b>Tools:</b> DTools, Adobe Acrobat, Microsoft Office, Caspio
                </li>
              </ul>
            </div>
            <span class="date-text">Aug 2023 - Sep 2024 | Hewlett, NY</span>
          </div>
          <div class="card">
            <div class="card-content">
              <div class="row">
                <div class="col sm 4">
                  <a
                    class="company-name"
                    href="https://www.simonsfoundation.org"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Simons Foundation
                  </a>
                </div>
              </div>
              <div class="role-text">Linux Systems Administrator Intern</div>
              <ul>
                <li>
                  Used the MacOS terminal and Git bash to host code on a remote
                  repository
                </li>
                <li>
                  Wrote Shell scripts to automate the deploy process of web
                  applications
                </li>
                <li>
                  Composed a markdown document to instruct users how to install
                  pakages
                </li>
                <li>
                  <b>Tools:</b> Apache, Git/GitHub, Docker, Bash, Markdown,
                  VSCode, Ubuntu, MacOS
                </li>
              </ul>
            </div>
            <div>
              <span className="date-text">
                Jun 2024 - Aug 2024 | New York, NY
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
