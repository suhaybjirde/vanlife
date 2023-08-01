import React from "react";
import { Link, useActionData, useLoaderData, Form, redirect } from "react-router-dom";
import { loginUser } from "../utils/api";
export function loader( { request }) {
    const url = new URL(request.url)
    return url.searchParams.get('message')
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get('email')
    const password = formData.get('password')

    try {
        const data = await loginUser({email, password})
        localStorage.setItem('loggedin', true)
        const rediretTo = redirect('/host')
        rediretTo.body = true
        return rediretTo
    } catch (error) {
        return error.message
    }
}

const Login = ()=> {
    const message = useLoaderData()
    const errorMessage = useActionData()
    return (
        <main className="main__login">
            <h1 className="main__login__title">Sign in to your account</h1>
            {message && !errorMessage && <h3 className="main__login__red">You must log in first.</h3>}
            {errorMessage && <h3 className="main__login__red">{errorMessage}</h3>}
            <Form method='post' className="main__login__form">
                <input type="text" name="email" placeholder="Email address" className="main__login__form__input email"/>
                <input type="password" name="password" placeholder="Password" className="main__login__form__input password"/>
                <button type="submit" className="main__login__form__submit-btn">Sign in</button>
            </Form>
            <p className="main__login__create-account">Don’t have an account? <Link>Create one now</Link></p>
        </main>
    )
}

export default Login