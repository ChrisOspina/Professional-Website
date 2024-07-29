import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import styles from "./Nav.module.scss"; 


function ContactNav(){
    const openLinkedInProfile =()=>{
        window.open("https://www.linkedin.com/in/christopher-ospina-311b68185/", "_blank");
    }

    const openGitHubProfile = () => {
        window.open("https://github.com/ChrisOspina","_blank");
    }

    const openEmailPopup = () => {
        window.location.href = "mailto:ChrisOspina99@gmail.com";
    }
    const openResume = () =>{
        window.open("https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub","_blank");
    }

    const openMedX =()=>{
        console.log("you clicked on open Med-X");
    }

    return(
        <>
        <Navbar bg="light" expand="lg" className={styles.Navbar}>
        <Container>
            <h1 className="contactNavheader">Contact Me</h1>
                    <Nav className={styles.Nav}>
                                <Nav.Link className={styles.Link} onClick={openMedX}>
                                    Med-X AI web application for chest X-rays
                                </Nav.Link>
                                <br/>
                                <br/>
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
                            </Nav>
        </Container>

        </Navbar>
        </>
    )
}

export default ContactNav;