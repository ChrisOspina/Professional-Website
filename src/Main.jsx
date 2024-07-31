import React from "react";
import './include/style.css';
import profile from './profile.jpg';
import nchalogo from './assets/National_HCA_Logo_RGB.png'
import saslogo from './assets/saslogo.png'

function Main(){
return(
    <div className="mainContent">
        <div className="mainHeader">
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
                    <li><b>Tools & Technologies:</b> Wodrpress, Git, Docker, AWS, WinSCP, Unity Engine, Netlify</li>
                </ul>
                <p>
                Looking for an opportunity to work in a challenging position combining my skills in Software Engineering, which provides professional development, interesting experiences and personal growth.   
                </p>
            </div>
        </section>
        <br/>

        <section id="experience" className="section scrollspy">
            <h2 className="mainHeader-heading">Experience</h2>
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
        </div>



            </div>
        </section>

        <article className="profile">
            <figure className="profile_img_container">
                <img className="profile_pic" src={profile} alt="profile"/>
            </figure>
        </article>
        <br/>
    </div>
)
}

export default Main