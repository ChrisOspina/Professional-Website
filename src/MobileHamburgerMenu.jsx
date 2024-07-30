import React, { useState } from 'react';

export default function MobileHamburgerMenu(){
    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled(!toggled);
    }

    return (
        <button id = "mobile-hamburger-menu" onClick = {handleClick}>Mobile</button>
    );
}