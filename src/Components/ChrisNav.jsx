import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import styles from "../include/Nav.module.scss"; 

function ChrisNav(){
    //The navbar will now redirect to the different sections
    
    //this will redirect to the About section 
    const gotoAbout = () =>{
        window.open("#about", "_self");
    }

    //This will redirect to the Expierence section
    const gotoExp = () =>{
        window.open("#experience", "_self");
    }

    //This will go to the skills section
    const gotoSkills = () =>{
        window.open("#skills", "_self");

    }

    //This will go to the projects section
    const gotoProjects = () =>{
        window.open ("#projects", "_self");
    }

    //This will go to the contact section
    const gotoContact = () =>{
        window.open ("#contact", "_self");
    }

    const gotoEducation = ()=>{
        window.open('#education', '_self');
    }

    const gotoCertifications = ()=>{
        window.open("#certifications", '_self');
    }

    //This function opens up the resume
    const openResume = () =>{
        window.open("https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub","_self");
    }

    return(
        <>
        <Navbar bg="light" expand="lg" className={styles.Navbar}>
        <div className="container">
                    <div className="nav-links">
                               
                                <Nav.Link className={styles.Link} onClick={gotoAbout}> <i className="fa-solid fa-user"></i>
                                   <span>About</span>
                                </Nav.Link>
                                <Nav.Link className={styles.Link} onClick={gotoExp}><i class="fa-solid fa-briefcase"></i>
                                    <span>Expierence</span>
                                </Nav.Link>
                                <Nav.Link className={styles.Link} onClick={gotoProjects}><i className="fa-solid fa-chart-gantt"></i>
                                    <span>Projects</span>
                                </Nav.Link>
                                <Nav.Link className={styles.Link} onClick={gotoSkills}><i class="fa-solid fa-laptop"></i>
                                    <span>Skills</span>
                                </Nav.Link>
                                <Nav.Link className={styles.Link} onClick={gotoEducation}><i class="fa-solid fa-user-graduate"></i>
                                    <span>Education</span>
                                </Nav.Link>
                                <Nav.Link className={styles.Link} onClick={gotoCertifications}><i class="fa-solid fa-certificate"></i>
                                    <span>Certifications</span>
                                </Nav.Link>
                                <Nav.Link  className={styles.Link} onClick={gotoContact}><i class="fa-regular fa-envelope"></i>
                                    <span>Contact</span>
                                </Nav.Link>
                                <Nav.Link  className={styles.Link} onClick={openResume}><i className="fa-regular fa-file"></i>
                                    <span>View My Resume</span>
                                </Nav.Link>
                            </div>
        </div>
        </Navbar>
        </>
    )
}

export default ChrisNav;