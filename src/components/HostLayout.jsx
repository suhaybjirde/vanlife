import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostNav = ()=> (
    <nav>
        <ul>
            <li>
                <NavLink to='.'>Dashboard</NavLink>
            </li>
            <li>
                <NavLink to='income'>Income</NavLink>
            </li>
            <li>
                <NavLink to='vans'>Vans</NavLink>
            </li>
            <li>
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
