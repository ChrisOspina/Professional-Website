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
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
                <li><a></a></li>
            </ul>
        </div>
    );
}