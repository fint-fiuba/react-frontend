import React from 'react'
import { Link } from 'react-router-dom';

import "../css/NavBar2.css";

const NavBar2 = () => {
    return (
        <header>
            <nav className="navbar navbar-light bg-light nav_ap">
                <Link to="/user" className="navbar-brand header_a">
                    <i className="bi bi-person-fill header_icon"></i>   
                </Link>
                <Link to="/match2" className="navbar-brand header_a">
                    <i className="bi bi-house-fill header_icon"></i>
                </Link>
                <Link to="/matches" className="navbar-brand header_a">
                    <i className="bi bi-calendar2-check-fill header_icon"></i>
                </Link>
            </nav>
        </header>
    )
}

export default NavBar2;
