import React from "react";
import {Navbar,Nav,Container} from "react-bootstrap";
import styles from "./Nav.module.scss"; 
import './App.css';

function ContactNav(){
    const openLinkedInProfile =()=>{
        window.open("https://www.linkedin.com/in/christopher-ospina-311b68185/", "_self");
    }

    const openGitHubProfile = () => {
        window.open("https://github.com/ChrisOspina","_self");
    }

    const openEmailPopup = () => {
        window.location.href = "mailto:ChrisOspina99@gmail.com";
    }
    const openResume = () =>{
        window.open("https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub","_self");
    }

    const openMedX =()=>{
       window.open("https://github.com/htmw/2024S-Med-X", "_self");
    }

    return(
        <>
        <Navbar bg="light" expand="lg" className={styles.Navbar}>
        <Container>
                    <Nav className="nav-links">
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