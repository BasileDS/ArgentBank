import store from "../app/store"
import { loginThunk } from "../app/userSlice"


function SignIn () {    

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = document.querySelector("#username").value
        const password = document.querySelector("#password").value
        
        store.dispatch(loginThunk({email, password}))
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
                </form>
            </section>
        </main>
    </>
}

export default SignIn