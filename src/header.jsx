import React from "react";
import './style.css';

function Header(){
    return(
    <header className="siteHeader">
         <div><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta></div>
        <div className ="siteTitle">Christopher Ospina</div>
        <div className="siteDescription">Websites, Unix based modifications, Unity applications and Cybersecurity</div>
    </header>
     
    )
}

export default Header;