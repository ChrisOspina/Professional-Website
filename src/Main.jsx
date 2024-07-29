import React from "react";
import './style.css';
import profile from './profile.jpg';

function Main(){
    //TODO: update information
return(
    <div className="mainContent">
        <div className="mainHeader">
            <h2 className="mainHeader-heading">About Me</h2>
        </div>
        <div className="descripiton">
            <p>I am currently an aspiring software engineer seeking oppurtunities to use the state-of-the-art technology to solve real-world problems. I work part time at SAS Technologies, 
        a firm based in Hewlett, NY. Where I assist with the security and telecommunications systems of clients all over the U.S. such as Pace,
        SVA and Touro.</p>
        <br/>
        <p>My journey with information technology started during my junior year in high school where I took course in computer technology to fulfill
        graduation requierements. From there I realized I wanted to pursue IT and software engineering as a career. At Farmingdale State College
        I took programming courses that covered aspects such as Database Systems, Web Development, Systems Analysis & Design, UNIX Operating Systems,
        Algorithms and Data Structures. During my tenure at Farmingdale, I partook in a summer research based project where I had the oppurtunity
        to assist in building an ontology based search engine. I then presented my findings at the SURC Research Confrence at SUNY Old Westbury. 
        After my time at Farmingdale, I continued my studies at the Seidenberg School of Computer Science and Information Systems at Pace University to obtain a masters degree.</p>
        <br/>
        <p>
        Additionally, I have previously taken on a job at National Healthcare Associates Inc as a Junior Systems Adminstrator. From this job I have
        learned both technical and transferrable skills which I am willing to present at any workplace environment. One of my major responsibilites
        was to develop and mantain a tech website by designing clean and highly scalable code that compiles with best practices.
        </p>
        </div>
        <article className="profile">
            <img className="profile_pic" src={profile} alt="profile"/>
        </article>
        <br/>
        <div className="lists">
            <div className="skills">
                <h1 className="ListHead">Soft Skills</h1>
                <ul id="skillslist">    
                    <li>Cybersecurity</li>
                    <li>Game Programming</li>
                    <li>Unix Operating Systems</li>
                    <li>Microsoft Office</li>
                    <li>Database Systems</li>
                </ul>
            </div>
            <div className="languages">
                <h1 className="ListHead">Programming Languages</h1>
                <ul id="Langlist">    
                    <li>C++</li>
                    <li>Java</li>
                    <li>JavaScript</li>
                    <li>Php</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>
            </div>
            <div className="certificates">
                <h1 className="ListHead">Certifications</h1>
                <ul id="certLisrlist">    
                    <li> Google Cybersecurity</li>
                    <li>Customer Service Standards</li>
                </ul>
            </div>
        </div>
       

    </div>
)
}

export default Main