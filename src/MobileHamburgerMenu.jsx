import React, { useState } from 'react';

export default function MobileHamburgerMenu(){
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
    }



    return (
        <div id = "mobile-hamburger-menu" onClick={handleClick}>
            <div className='bar1'></div>
            <div className='bar2'></div>
            <div className='bar3'></div>
            <ul class="mobile-menu">
                <li><a href="https://github.com/htmw/2024S-Med-X">Med-X AI web application for chest X-ray</a></li>
                <li><a href="https://www.linkedin.com/in/christopher-ospina-311b68185/">LinkedIn</a></li>
                <li><a href="https://github.com/ChrisOspina">GitHub</a></li>
                <li><a href="https://docs.google.com/document/d/e/2PACX-1vT7D-WqYybf5U3y1wWVKvcPPKgSar9AYW2AvL9tMdf-L8uNWnxTovx_hdsMCX1sGA/pub">View My Resume</a></li>
                <li><a href="mailto:ChrisOspina99@gmail.com">Shoot Me an Email</a></li>
            </ul>
        </div>
    );
}