import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import store from "../app/store"
import { loginThunk, selectLogged, userDataThunk } from "../app/userSlice"
import { NavLink } from "react-router-dom"
import { useState } from "react"

import connectionRedirects from "../utils/connectionRedirects"

function Login () {
    const [loginErrorMessage, setLoginErrorMessage] = useState(null)
    
    const logged = useSelector(selectLogged)
    connectionRedirects(logged)

    if (logged) {
        return <Navigate replace to="/profile" />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        
        // Update state token & userInfo + set Token to localStorage on submit
        const res = await store.dispatch(loginThunk({email, password}))

        if (res.meta.requestStatus === "rejected") {
            setLoginErrorMessage("Wrong username or password")
        } else {
            setLoginErrorMessage(null)
            const token = res?.payload?.body?.token
            store.dispatch(userDataThunk(token))
            window.localStorage.setItem("authToken", token)
        }
    }
    
    return <>
        <main className="main bg-light">
            <section className="sign-in-content">
                <div className="sign-in-header">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-wrapper">
                        <label htmlFor ="username">Username</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor ="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-remember">
                        <label htmlFor ="remember-me">Remember me</label>
                        <input type="checkbox" id="remember-me" />
                    </div>
                    {
                        loginErrorMessage && <p>{loginErrorMessage}</p>
                    }
                    <button type="submit" className="button full-width filled-button">Sign In</button>
                    <div className="full-width">
                        <NavLink to="/signup" className="button outlined-button">Create an account</NavLink>
                    </div>
                </form>
            </section>
        </main>
    </>
}

export default Login