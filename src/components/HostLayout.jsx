import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostNav = ()=> (
    <nav className="host-nav">
        <ul className="host-nav__list">
            <li className="host-nav__list__item">
                <NavLink to='.' end>Dashboard</NavLink>
            </li>
            <li className="host-nav__list__item">
                <NavLink to='income'>Income</NavLink>
            </li>
            <li className="host-nav__list__item">
                <NavLink to='vans'>Vans</NavLink>
            </li>
            <li className="host-nav__list__item">
                <NavLink to='reviews'>Reviews</NavLink>
            </li>
        </ul>
    </nav>
)

const HostLayout = ()=> {
    return (
        <main>
            <HostNav />
            <Outlet />
        </main>
    )
}

export default HostLayout
