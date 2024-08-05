import React from "react";
import '../include/style.css';
import * as images from '../include/images';

function Main(){
return(
    <div className="mainContent">
        <div className="mainHeader">
        <article className="profile">
            <figure className="profile_img_container">
                <img className="profile_pic" src={images.profile} alt="profile"/>
            </figure>
        </article>
        <br/>
            <h2 className="mainHeader-heading">About Me</h2>
        </div>

        <section id="about" className="section scrollspy">
            <div className="containter flow-text">
                <p>I am currently an aspiring software engineer seeking oppurtunities to use the state-of-the-art technology to solve real-world problems. 
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
                    <li><b>Tools & Technologies:</b> Wodrpress, Git, Docker, AWS, WinSCP, Unity Engine, Android Studio, Netlify</li>
                </ul>
                <p>
                Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.   
                </p>
            </div>
        </section>
        <br/>
        
        <section id="experience" className="section scrollspy">
            <h2 className="mainHeader-heading">Experience</h2>
            <br/>
            <div class="container">
                <div class="card">
                <div class="card-content">
                    <div class="row">
                    <div class="col s12 m2">
                        <a href="https://www.nhca.com/"><img alt="National logo"
                            src={images.nhcalogo} class="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role brown-text text-darken-2">Junior Systems Administrator</div>
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
          <div class="card-action">
            <span>March 2020 - Jan 2023 | Valley Stream, NY</span>
          </div>
        </div>
        <br/>
        <br/>
        
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m2">
                <a href="https://www.sastechnologies.com"><img alt="SAS logo"
                    src={images.saslogo} class="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role brown-text text-darken-2">Project Assistant</div>
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
          <div class="card-action">
            <span>Aug 2023 - Present | Hewlett, NY</span>
          </div>
          <br/>
          <br/>
        </div>
        <div class="card">
          <div class="card-content">
            <div class="row">
              <div class="col s12 m2">
                <a href="https://www.simonsfoundation.org"><img alt="Simons logo"
                    src={images.simonslogo} className="responsive-img center-block" /></a>
              </div>
            </div>
            <div class="role brown-text text-darken-2">Linux Systems Administrator Intern</div>
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
          <div class="card-action">
            <span>Jun 2024 - Aug 2024 | New York, NY</span>
          </div>
        </div>
            </div>
        </section>

        <section id="projects" className="section scrollspy">
          <h2 className="mainHeader-heading">Projects</h2>
          <div className="container">
            <div className="row">
                    <div class="col s12 m6 l6">
                        <div class="card">
                            <div class="card-content">
                              <ul id="projects-list">
                                <li>
                                <a aria-label="Chest X-ray web app" href="https://github.com/ChrisOspina/2024S-Med-X">
                                  <img className="project-img" id="med-x" alt="Chest X-ray web app" src={images.Medxlogo}/>
                                </a>
                                </li>
                                <li>
                                  <a aria-label="Healthy Eating meal planner mobile app" href="https://github.com/ChrisOspina/Final-CS639">
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
        

        <section id="education" className="section scrollspy">
            <h2 className="mainHeader-heading">Education</h2>
            <div className="container">
                <div className="row">
                    <div class="col s12 m6 l6">
                        <div class="card">
                            <div class="card-content">
                                <p>
                                    <a href="https://www.farmingdale.edu/"><img alt="FSC logo"
                                    src={images.fsclogo} className="responsive-img center-block"></img></a>
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
                                  <a href="https://www.pace.edu/seidenberg"><img alt="Pace logo"
                                    src={images.pacelogo} className="responsive-img center-block"></img></a>
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
            <h2 className="mainHeader-heading">Contact Me</h2>
            <div className="contact_container">
              <ul>
              <li>
                    <a aria-label="Shoot me an Email" href="mailto:ChrisOspina99@gmail.com">
                        <i className="fa-regular fa-envelope fa-lg" title="Shoot me an Email"></i></a>
                </li>
                <br/>
                <li>
                  <a aria-label="Check out my projects on GitHub" href="https://github.com/ChrisOspina">
                    <i className="fa-brands fa-github fa-lg" title="Check out my projects on GitHub"></i></a>
                </li>    
                <br/>
                <li>
                  <a aria-label="Connect with me on LinkedIn" href="https://www.linkedin.com/in/christopher-ospina-311b68185">
                  <i className="fa-brands fa-linkedin fa-lg" title="Connect with me on LinkedIn"></i></a>
                </li>
              </ul>
              
            </div>    
        </section>
    </div>
)
}

export default Main