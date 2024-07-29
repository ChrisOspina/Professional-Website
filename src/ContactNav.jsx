import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import styles from "./Nav.module.scss"; 


function ContactNav(){
    const openLinkedInProfile =()=>{
        window.open("https://www.linkedin.com/in/christopher-ospina-311b68185/", "_blank");
        //console.log("LinkedIn works");
    }

    const openGitHubProfile = () => {
        window.open("https://github.com/ChrisOspina","_blank");
        //console.log("GitHub works");
    }

    const openEmailPopup = () => {
        window.location.href = "mailto:ChrisOspina99@gmail.com";
    }

    //TODO: Update resume link
    const openResume = () =>{
        window.open("https://drive.google.com/file/d/1J1cXy1vsVwndSNF3JDRRKRitI33FydcJ/view?usp=sharing","_blank");
        //console.log(" you clicked open resume");
    }
    const openMedX = () =>{
        window.open("https://github.com/ChrisOspina/Chris.git", "_blank");
    }

    //TODO Write function that connects to Simons work

    return(
        <>
        <Navbar bg="light" expand="lg" className={styles.Navbar}>
        <Container>
            <h1 className="contactNavheader">Portfolio</h1>
                    <Nav className={styles.Nav}>
                                <Nav.Link className={styles.Link} onClick={openLinkedInProfile}>
                                    LinkedIn
                                </Nav.Link>
                                <br/>
                                <br/>
                                <Nav.Link  className={styles.Link} onClick={openGitHubProfile}>
                                    GitHub
                                </Nav.Link>
                                <br/>
                                <br/>
                                <Nav.Link  className={styles.Link} onClick={openResume}>
                                    View My Resume
                                </Nav.Link>
                                <br/>
                                <br/>
                                <Nav.Link  className={styles.Link} onClick={openEmailPopup}>
                                    Shoot Me an Email
                                </Nav.Link>
                                <br/>
                                <br/>
                                <Nav.Link className={styles.Link} onClick={openMedX}>
                                    View Med-X Capstone Project
                                </Nav.Link>
                            </Nav>
        </Container>
            <div id="hamburger-icon">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
        </Navbar>
        </>
    )
}

export default ContactNav;