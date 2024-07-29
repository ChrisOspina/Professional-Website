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
            <figure className="profile_img_container">
                <img className="profile_pic" src={profile} alt="profile"/>
            </figure>
        </article>
        <br/>
            <div className="skills">
                <h1 className="ListHead"><strong>Portfolio</strong></h1>
                <ul id="services">    
                    <li><a href="https://github.com/htmw/2024S-Med-X">Med-X AI web application for chest X-rays</a></li>
                    <br/>
                    <li><a href="https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub">View My Resume</a></li>
                    <br/>
                    <li><a href="https://www.linkedin.com/in/christopher-ospina-311b68185/">Connect with me on LinkedIn</a></li>
                    <br/>
                    <li><a href="https://github.com/ChrisOspina">Check out my GitHub</a></li>
                    <br/>
                    <li><a href="mailto:ChrisOspina99@gmail.com">Shoot Me an Email</a></li>
                </ul>
            </div>
    </div>
)
}

export default Main