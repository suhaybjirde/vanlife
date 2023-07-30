import React from "react";
import { Link, useLoaderData } from "react-router-dom";

export function loader( { request }) {
    const url = new URL(request.url)
    return url.searchParams.get('message')
}

const Login = ()=> {
    const message = useLoaderData()
    return (
        <main className="main__login">
            <h1 className="main__login__title">Sign in to your account</h1>
            {message && <h3 className="main__login__red">You must log in first.</h3>}
            <form action=""  className="main__login__form">
                <input type="text" name="" id="" placeholder="Email address" className="main__login__form__input email"/>
                <input type="password" name="" id="" placeholder="Password" className="main__login__form__input password"/>
                <button type="submit" className="main__login__form__submit-btn">Sign in</button>
            </form>
            <p className="main__login__create-account">Don’t have an account? <Link>Create one now</Link></p>
        </main>
    )
}

export default Login