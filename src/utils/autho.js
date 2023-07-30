import { redirect } from "react-router-dom"

export async function requireAuth() {
    const isLoggedIn = false
    
    if (!isLoggedIn) {
        const response = redirect('/login?message="login first"')
        response.body = true
        throw response
    }
}