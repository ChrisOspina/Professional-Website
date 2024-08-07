import React from "react";
import '../include/style.css';
import * as images from '../include/images';

function Main(){
return(
    <div className="mainContent">
        <section id="about" className="section scrollspy">
          <h2 className="section-heading">About Me</h2>
          <article className="profile">
              <figure className="profile_img_container">
                  <img className="profile_pic" src={images.profile} alt="profile"/>
              </figure>
          </article>
            <br/>
            <div className="container_flow-text">
                <p>I am an aspiring software engineer seeking oppurtunities to use the state-of-the-art technology to solve real-world problems. 
                I enjoy problem-solving and coding. Always strive to bring 100% to the work I do.

                During my bachelor's and master's programs I have worked with technologies like C++, Python, Java, MySQL, The Unix Terminal, Node.js, and the Unity engine.
                I have over four years of professional work expierence at companies like National Healthcare and The Simons Foundation which helped me
                strenghthen my expertise of MySQL, PhP and Linux.

                I am passionate about developing complex applications that solve real-world problems impacting millions of users. 
                </p>
                <ul>
                    <li><b>Languages:</b> Python, Java, JavaScript, C, C++, C#, HTML/CSS, Sass, Php, Bash</li>
                    <li><b>Databases:</b> MySQL, NoSQL</li>
                    <li><b>Libraries:</b> NumPy, Pandas, OpenCV</li>
                    <li><b>Frameworks:</b> React, Flask, DataTables, Node.js, Bootstrap, Apache</li>
                    <li><b>Tools & Technologies:</b> Wordpress, Git, Docker, AWS, WinSCP, Unity Engine, Android Studio, Netlify</li>
                </ul>
                <p>
                Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.   
                </p>
            </div>
        </section>

        <section id="experience" className="section scrollspy">
            <h2 className="section-heading">Experience</h2>
            <br/>
            <div class="container">
                <div class="card">
                <div class="card-content">
                    <div class="row">
                    <div class="col s12 m2">
                        <a href="https://www.nhca.com/" target="_blank" rel="noreferrer"><img alt="National logo"
                            src={images.nhcalogo} class="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role-text">Junior Systems Administrator</div>
            <ul>
              <li>
              Performed software maintenance & cleanup procedures to dispose of old stored data, ensuring hardware security & maintenance through configuring & encrypting laptops & Apple products for secure remote use.
              </li>
              <li>
              Organized server room to comply with safety protocols & test device functionality 
              </li>
              <li>Automated employee report generation through web forms using PHP Form Builder, editing code with VS Code.</li>
              <li>Developed web application to store & display employee, facility, procurement, & invoice data, automating data insertion from flat csv file into SQL database.</li>
              <li>
                <b>Tools:</b> MySQL, VS Code, PHP, Apache, JavaScript, Bootstrap, DataTables
              </li>
            </ul>
          </div>
            <span className="date-text">March 2020 - Jan 2023 | Valley Stream, NY</span>
        </div>
        <br/>
        <br/>
        
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m2">
                <a href="https://www.sastechnologies.com" target="_blank" rel="noreferrer"><img alt="SAS logo"
                    src={images.saslogo} class="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role-text">Project Assistant</div>
            <ul>
              <li>
              Configure card readers for school residence halls, assisting in equipment tally for camera & card reader installations.
              </li>
              <li>
              Generate networking cable labels, programming security cameras by establishing circuit & configuring settings via app to ensure safety of institution & students.
              </li>
                <li><b>Tools:</b> DTools, Adobe Acrobat, Microsoft Office</li>
            </ul>
          </div>
            <span className="date-text">Aug 2023 - Present | Hewlett, NY</span>
          <br/>
          <br/>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m2">
                <a href="https://www.simonsfoundation.org" target="_blank" rel="noreferrer"><img alt="Simons logo"
                    src={images.simonslogo} className="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role-text">Linux Systems Administrator Intern</div>
            <ul>
              <li>
              Used the MacOS terminal and Git bash to host code on a remote repository
              </li>
              <li>
                Wrote Shell scripts to automate the deploy process of web applications
              </li>
              <li>
                Composed a markdown document to instruct users how to install pakages
              </li>
                <li><b>Tools:</b> Apache, Git/GitHub, Docker, Bash, Markdown, VSCode, Ubuntu, MacOS</li>
            </ul>
          </div>
          <div>
            <span className="date-text">Jun 2024 - Aug 2024 | New York, NY</span>
          </div>
        </div>
            </div>
        </section>

        <section id="projects" className="section scrollspy">
          <h2 className="section-heading">Projects</h2>
          <div className="container">
            <div className="row">
                    <div class="col s12 m6 l6">
                        <div class="card">
                            <div class="card-content">
                              <ul id="projects-list">
                                <li>
                                <a aria-label="Chest X-ray web app" href="https://github.com/ChrisOspina/2024S-Med-X" target="_blank" rel="noreferrer">
                                  <img className="project-img" id="med-x" alt="Chest X-ray web app" src={images.Medxlogo}/>
                                </a>
                                </li>
                                <li>
                                  <a aria-label="Healthy Eating meal planner mobile app" href="https://github.com/ChrisOspina/Final-CS639" target="_blank" rel="noreferrer">
                                      <img className="project-img" id="plateperf" alt="PlatePerfect app" src={images.platePerflogo}/>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                    </div>
            </div>
        </section>
        
        <section id="skills" className="section scrollspy">
          <h2 className="section-heading">Skills</h2>
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="skill-section" id="languages">
                  <h3 className="skill-section-head">Languages and Databases</h3>
                  <ul className="skill-list" id="language-list">
                    <li>
                      <img alt="Cpp" className="skill-logo" src={images.cpplogo}/>
                      <p className="skill-label">C++</p>
                    </li>
                    <li>
                      <img alt="CS" className="skill-logo" src={images.cslogo}/>
                      <p className="skill-label">C#</p>
                    </li>
                    <li>
                      <img alt="java" className="skill-logo" src={images.javalogo}/>
                      <p className="skill-label">Java</p>
                    </li>
                    <li>
                      <img alt="python" className="skill-logo" src={images.pythonlogo}/>
                      <p className="skill-label">Python</p>
                    </li>
                    <li>
                      <img alt="HTML5" className="skill-logo" src={images.htmllogo}/>
                      <p className="skill-label">HTML5</p>
                    </li>
                    <li>
                      <img alt="CSS3" className="skill-logo" src={images.csslogo}/>
                      <p className="skill-label">CSS3</p>
                    </li>
                    <li>
                      <img alt="javascript" className="skill-logo" src={images.javascriptlogo}/>
                      <p className="skill-label">JavaScript</p>
                    </li>
                    <li>
                      <img alt="php" className="skill-logo" src={images.phplogo}/>
                      <p className="skill-label">Php</p>
                    </li>
                    <li>
                      <img alt="mysql" className="skill-logo" src={images.mysqllogo}/>
                      <p className="skill-label">MYSQL</p>
                    </li>
                    <li>
                      <img alt="bash" className="skill-logo" src={images.shelllogo}/>
                      <p className="skill-label">Shell Scripting</p>
                    </li>

                  </ul>
                </div>

                <div className="skill-section" id="libraries">
                  <h3 className="skill-section-head">Libraries</h3>
                  <ul className="skill-list" id="library-list">
                  <li>
                      <img alt="bootstrap" className="skill-logo" src={images.bootstrap}/>
                      <p className="skill-label">Bootstrap</p>
                  </li>
                  <li>
                      <img alt="DataTables" className="skill-logo" src={images.datatables}/>
                      <p className="skill-label">DataTables</p>
                  </li>
                  <li>
                      <img alt="numpy" className="skill-logo" src={images.numpylogo}/>
                      <p className="skill-label">NumPy</p>
                  </li>
                  <li>
                      <img alt="pandas" className="skill-logo" src={images.pandaslogo}/>
                      <p className="skill-label">Pandas</p>
                  </li>
                  <li>
                      <img alt="sk-learn" className="skill-logo" src={images.sckitlearn}/>
                      <p className="skill-label">scikit-learn</p>
                  </li>
                  <li>
                    <img alt="react" className="skill-logo" src={images.reactlogo}/>
                    <p className="skill-label">React</p>
                  </li>
                  </ul>
                </div>

                <div className="skill-section" id="technologies">
                  <h3 className="skill-section-head">Technologies</h3>
                  <ul className="skill-list" id="technology-list">
                  <li>
                      <img alt="Android Studio" className="skill-logo" src={images.androidstudio}/>
                      <p className="skill-label">Android Studio</p>
                    </li>
                    <li>
                      <img alt="apache" className="skill-logo" src={images.apachelogo}/>
                      <p className="skill-label">Apache</p>
                    </li>
                    <li>
                      <img alt="docker" className="skill-logo" src={images.dockerlogo}/>
                      <p className="skill-label">Docker</p>
                    </li>
                    <li>
                      <img alt="git" className="skill-logo" src={images.gitlogo}/>
                      <p className="skill-label">Git</p>
                    </li>
                    <li>
                      <img alt="node" className="skill-logo" src={images.nodejslogo}/>
                      <p className="skill-label">Node.js</p>
                    </li>
                    <li>
                      <img alt="unity" className="skill-logo" src={images.unitylogo}/>
                      <p className="skill-label">Unity engine</p>
                    </li>
                    <li> 
                      <img alt="wordpress" className="skill-logo" src={images.wordpresslogo}/>
                      <p className="skill-label">Wordpress</p>
                    </li>
                    <li> 
                      <img alt="VsCode" className="skill-logo" src={images.vscodelogo}/>
                      <p className="skill-label">Visual Studio Code</p>
                    </li>

                   

                  </ul>
                </div>


              </div>
            </div>

          </div>
        </section>

        <section id="education" className="section scrollspy">
            <h2 className="section-heading">Education</h2>
            <div className="container">
                <div className="row">
                    <div class="col s12 m6 l6">
                        <div class="card">
                            <div class="card-content">
                                <p>
                                    <a href="https://www.farmingdale.edu/" target="_blank" rel="noreferrer"><img id="fsc_logo" alt="FSC logo"
                                    src={images.fsclogo}></img></a>
                                </p>
                                <p>Farmingdale, NY</p>
                                <p>
                                    <b>Degree: </b>Bachelor of Science in Computer Programming & Information Systems  
                                <br/>
                                    <b>GPA: </b>3.29/4.0
                                </p>

                                <ul>
                                    <p>
                                        <b>Relevant Courseworks:</b>
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
                    </div>
                    <div className="col s12 m6 16">
                        <div className="card">
                            <div className="card-content">
                                <p>
                                  <a href="https://www.pace.edu/seidenberg" target="_blank" rel="noreferrer"><img alt="Pace logo"
                                    src={images.pacelogo} id="pace_logo"></img></a>
                                </p>
                                <p>New York, NY</p>
                                <p>
                                    <b>Degree: Masters of Science in Computer Science</b>
                                    <br/>
                                    <b>GPA:</b>3.44/4.0
                                </p>

                                <ul>
                                <p>
                                    <b>Relevant Courseworks:</b>
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

        <section id ="contact" className="section scrollspy">
            <h2 className="section-heading">Contact Me</h2>
            <div className="contact_container">
              <ul>
              <li>
                    <a aria-label="Shoot me an Email" href="mailto:ChrisOspina99@gmail.com" target="_blank" rel="noreferrer">
                        <i className="fa-regular fa-envelope fa-lg" title="Shoot me an Email"></i></a>
                </li>
                <br/>
                <li>
                  <a aria-label="Check out my projects on GitHub" href="https://github.com/ChrisOspina" target="_blank" rel="noreferrer">
                    <i className="fa-brands fa-github fa-lg" title="Check out my projects on GitHub"></i></a>
                </li>    
                <br/>
                <li>
                  <a aria-label="Connect with me on LinkedIn" href="https://www.linkedin.com/in/christopher-ospina-311b68185" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin fa-lg" title="Connect with me on LinkedIn"></i></a>
                </li>
              </ul>
              
            </div>    
        </section>
    </div>
)
}

export default Main