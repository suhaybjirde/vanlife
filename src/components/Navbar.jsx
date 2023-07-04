import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ()=> (
    <header className="header">
        <h1 className="header__logo"><NavLink to='/'>#VANLIFE</NavLink></h1>
        <nav className="header__nav">
            <ul className="header__nav__ul">
                <li className="header__nav__ul_link"><NavLink to='/about' className={({isActive}) => isActive ? 'active' : null}>About</NavLink></li>
                <li className="header__nav__ul_link"><NavLink to='/vans' className={({isActive}) => isActive ? 'active' : null}>Vans</NavLink></li>
            </ul>
        </nav>
    </header>
)

export default Navbar