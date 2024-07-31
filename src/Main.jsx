import React from "react";
import './include/style.css';
import profile from './profile.jpg';
import nchalogo from './assets/National_HCA_Logo_RGB.png';
import saslogo from './assets/saslogo.png';
import simonslogo from './assets/01-SF-primary-logo-color.png'

function Main(){
return(
    <div className="mainContent">
        <div className="mainHeader">
        <article className="profile">
            <figure className="profile_img_container">
                <img className="profile_pic" src={profile} alt="profile"/>
            </figure>
        </article>
        <br/>
            <h2 className="mainHeader-heading">About Me</h2>
        </div>

        <section id="descripiton" className="section scrollspy">
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
                            src={nchalogo} class="responsive-img center-block" /></a>
              </div>
              <div class="col s12 m10">
                <p>
                  <span class="card-title"><a href="https://www.nhca.com/"
                      class="teal-text hoverline">National Healthcare Associates, Inc.</a></span>
                </p>
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
                    src={saslogo} class="responsive-img center-block" /></a>
              </div>
              <div class="col s12 m10">
                <p>
                  <span class="card-title"><a href="https://www.sastechnologies.com" 
                      class="teal-text hoverline">SAS Technologies</a></span>
                </p>
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
                    src={simonslogo} class="responsive-img center-block" /></a>
              </div>
              <div class="col s12 m10">
                <p>
                  <span class="card-title"><a href="https://www.simonsfoundation.org" 
                      class="teal-text hoverline">Simons Foundation</a></span>
                </p>
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
        <section id="education" className="section scrollspy">
            <h2 className="mainHeader-heading">Education</h2>
            <div className="container">
                <div className="row">
                    <div class="col s12 m6 l6">
                        <div class="card">
                            <div class="card-content">
                                <p>
                                    <span class="card-title"><a href="https://www.farmingdale.edu/" class="teal-text hoverline">Farmingdale State College</a></span>
                                </p>
                                <p class="brown-text">Farmingdale, NY</p>
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
                                    <span className="card-title">
                                        <a href="https://www.pace.edu/seidenberg" className="teal-text hoverline">Seidenberg School of Computer Science & Information Systems, Pace University</a>
                                    </span>
                                </p>
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
            <div className="container">
                <p>
                    <a aria-label="Shoot me an Email" href="mailto:ChrisOspina99@gmail.com" 
                    className="btn-floating btn-large waves-effect waves-light blue-grey tooltipped">
                        <i className="fa-regular fa-envelope"></i><a aria-label="Shoot me an Email" href="mailto:ChrisOspina99@gmail.com"
                          className="hoverline">ChrisOspina99@gmail.com</a></a>
                </p>    
            </div>    
        </section>
    </div>
)
}

export default Main