import React from "react";
import './style.css';
import ContactNav from "./ContactNav";
import MobileHamburgerMenu from "./MobileHamburgerMenu";

function Header(){
    return(
    <header className="siteHeader">
        { <ContactNav/> }
        { <MobileHamburgerMenu/> }
        <div className ="siteTitle">Christopher Ospina</div>
        <div className="siteDescription">Websites, Unix based modifications, Unity applications and Cybersecurity</div>
    </header>
     
    )
}

export default Header;