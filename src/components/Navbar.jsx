import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=> (
    <header className="header">
        <h1 className="header__logo"><Link to='/'>#VANLIFE</Link></h1>
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul_link"><Link to='/about'>About</Link></li>
                <li className="header__nav__ul_link"><Link to='/vans'>Vans</Link></li>
            </ul>
        </nav>
    </header>
)

export default Navbar