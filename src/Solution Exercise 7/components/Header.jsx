import React from 'react';
import {Link} from "react-router-dom";

function Header() {
    return (
        <ul className="Header">
            <li className="Logo">
                Catstagram
            </li>
            <li> <Link to = 'HomePage'>
                Home
                </Link>
            </li>
            <li> <Link to ='AboutPage'>
                About
                </Link>
            </li>
            <li> <Link to= 'ProfilePage'>
                Profile
                </Link>
            </li>
        </ul>
    );
};

export default Header;