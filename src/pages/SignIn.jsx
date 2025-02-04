import { useSelector } from "react-redux"
import store from "../app/store"
import { loginThunk, selectLogged, userDataThunk } from "../app/userSlice"
import { Navigate, NavLink } from "react-router-dom"


function SignIn () {    
    const logged = useSelector(selectLogged)
    if (logged) {
      return <Navigate replace to="/user" />
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        
        // Update state token & userInfo + set Token to localStorage on submit
        const res = await store.dispatch(loginThunk({email, password}))
        const token = res.payload.body.token
        store.dispatch(userDataThunk(token))
        window.localStorage.setItem("authToken", token)
    }

    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="sign-in-button">Sign In</button>
                    <NavLink to="/signup" className="sign-in-button">Create an account</NavLink>
                </form>
            </section>
        </main>
    </>
}

export default SignIn