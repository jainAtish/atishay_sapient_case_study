import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className='header'>
            <div className='section1 fx_aC'>
                <div>
                    Sabka Bazar
                </div>
                <nav className="nav-section">
                    <NavLink
                        to="/Login"
                        className="nav-link"
                        activeClassName="selected">
                        About
                    </NavLink>
                    &emsp;
                    &emsp;
                    <NavLink
                        to="/Register"
                        className="nav-link"
                        activeClassName="selected">
                        Register
                    </NavLink>
                </nav>
            </div>
            <section className='section2'>
                <div className='auth'>
                    <span>SignIn</span>
                    &emsp;
                    <span>Register</span>
                </div>
            </section>
        </header >
    )
}

export default Header