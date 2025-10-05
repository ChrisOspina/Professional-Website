import React from "react";
import * as images from "../include/images.js";

const SkillsPage = () => {
  return (
    <div>
      {" "}
      <section id="skills" className="section scrollspy">
        <h2 className="section-heading">Skills</h2>
        <div className="container">
          <div className="card" id="languages">
            <div className="card-content">
              <h3 className="skill-section-head">Languages and Databases</h3>
              <hr />
              <ul className="skill-list" id="language-list">
                <li>
                  <img alt="Cpp" className="skill-logo" src={images.cpplogo} />
                  <p className="skill-label">C++</p>
                </li>
                <li>
                  <img alt="CS" className="skill-logo" src={images.cslogo} />
                  <p className="skill-label">C#</p>
                </li>
                <li>
                  <img
                    alt="java"
                    className="skill-logo"
                    src={images.javalogo}
                  />
                  <p className="skill-label">Java</p>
                </li>
                <li>
                  <img
                    alt="python"
                    className="skill-logo"
                    src={images.pythonlogo}
                  />
                  <p className="skill-label">Python</p>
                </li>
                <li>
                  <img
                    alt="HTML5"
                    className="skill-logo"
                    src={images.htmllogo}
                  />
                  <p className="skill-label">HTML5</p>
                </li>
                <li>
                  <img alt="CSS3" className="skill-logo" src={images.csslogo} />
                  <p className="skill-label">CSS3</p>
                </li>
                <li>
                  <img
                    alt="javascript"
                    className="skill-logo"
                    id="js-logo"
                    src={images.javascriptlogo}
                  />
                  <p className="skill-label">JavaScript</p>
                </li>
                <li>
                  <img
                    alt="php"
                    className="skill-logo"
                    id="php-logo"
                    src={images.phplogo}
                  />
                  <p className="skill-label">Php</p>
                </li>
                <li>
                  <img
                    alt="mysql"
                    className="skill-logo"
                    src={images.mysqllogo}
                  />
                  <p className="skill-label">MYSQL</p>
                </li>
                <li>
                  <img
                    alt="bash"
                    className="skill-logo"
                    src={images.shelllogo}
                  />
                  <p className="skill-label">Shell Scripting</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="card" id="libraries">
            <div className="card-content">
              <h3 className="skill-section-head">Libraries</h3>
              <hr />
              <ul className="skill-list" id="library-list">
                <li>
                  <img
                    alt="bootstrap"
                    className="skill-logo"
                    src={images.bootstrap}
                  />
                  <p className="skill-label">Bootstrap</p>
                </li>
                <li>
                  <img
                    alt="DataTables"
                    className="skill-logo"
                    src={images.datatables}
                  />
                  <p className="skill-label">DataTables</p>
                </li>
                <li>
                  <img
                    alt="numpy"
                    className="skill-logo"
                    src={images.numpylogo}
                  />
                  <p className="skill-label">NumPy</p>
                </li>
                <li>
                  <img
                    alt="pandas"
                    className="skill-logo"
                    id="pandas-logo"
                    src={images.pandaslogo}
                  />
                  <p className="skill-label">Pandas</p>
                </li>
                <li>
                  <img
                    alt="sk-learn"
                    className="skill-logo"
                    src={images.sckitlearn}
                  />
                  <p className="skill-label">scikit-learn</p>
                </li>
                <li>
                  <img
                    alt="react"
                    className="skill-logo"
                    src={images.reactlogo}
                  />
                  <p className="skill-label">React</p>
                </li>
                <li>
                  <img
                    alt="tailwind"
                    id="tailwind-logo"
                    className="skill-logo"
                    src={images.tailwind}
                  />
                  <p className="skill-label">Tailwind CSS</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="card" id="technologies">
            <div className="card-content">
              <h3 className="skill-section-head">Technologies</h3>
              <hr />
              <ul className="skill-list" id="technology-list">
                <li>
                  <img
                    alt="Android Studio"
                    className="skill-logo"
                    src={images.androidstudio}
                  />
                  <p className="skill-label">Android Studio</p>
                </li>
                <li>
                  <img
                    alt="apache"
                    className="skill-logo"
                    src={images.apachelogo}
                  />
                  <p className="skill-label">Apache</p>
                </li>
                <li>
                  <img
                    alt="blazor"
                    className="skill-logo"
                    src={images.blazor}
                  />
                  <p className="skill-label">Blazor</p>
                </li>
                <li>
                  <img
                    alt="caspio"
                    className="skill-logo"
                    id="caspio-logo"
                    src={images.caspio}
                  />
                  <p className="skill-label">Caspio</p>
                </li>
                <li>
                  <img
                    alt="docker"
                    className="skill-logo"
                    id="docker-logo"
                    src={images.dockerlogo}
                  />
                  <p className="skill-label">Docker</p>
                </li>
                <li>
                  <img alt="git" className="skill-logo" src={images.gitlogo} />
                  <p className="skill-label">Git</p>
                </li>
                <li>
                  <img
                    alt="jira"
                    className="skill-logo"
                    src={images.jiralogo}
                  />
                  <p className="skill-label">Jira Software</p>
                </li>
                <li>
                  <img
                    alt="dotnet"
                    className="skill-logo"
                    src={images.dotnet}
                  />
                  <p className="skill-label"> .NET Framework</p>
                </li>
                <li>
                  <img
                    alt="node"
                    className="skill-logo"
                    src={images.nodejslogo}
                  />
                  <p className="skill-label">Node.js</p>
                </li>
                <li>
                  <img
                    alt="unity"
                    className="skill-logo"
                    src={images.unitylogo}
                  />
                  <p className="skill-label">Unity engine</p>
                </li>
                <li>
                  <img
                    alt="wordpress"
                    className="skill-logo"
                    src={images.wordpresslogo}
                  />
                  <p className="skill-label">Wordpress</p>
                </li>
                <li>
                  <img
                    alt="VisualStudio"
                    className="skill-logo"
                    src={images.visualstudio}
                  />
                  <p className="skill-label">Visual Studio</p>
                </li>
                <li>
                  <img
                    alt="VsCode"
                    className="skill-logo"
                    src={images.vscodelogo}
                  />
                  <p className="skill-label">Visual Studio Code</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
