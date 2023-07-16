import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <main className="main__404">
        <div>
            <h1>Sorry, the page you were looking for was not found.</h1>
            <Link to='/'>Return to home</Link>
        </div>
    </main>
)

export default NotFound