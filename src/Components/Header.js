import React from "react";
import { NavLink } from "react-router-dom";
import './HeaderComp.css'

const Header = () => {
    return (
        <>
            <nav>
                <NavLink className="navStyle" to="/">Home</NavLink>
                <NavLink className="navStyle" to="/student">Students</NavLink>
                <NavLink className="navStyle" to="/contact">ContactUs</NavLink>
            </nav>
        </>
    )
}

export default Header