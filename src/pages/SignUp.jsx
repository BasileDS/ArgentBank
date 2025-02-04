import { useState } from "react"
import { newUser } from "../utils/api"


function SignUp () {
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const firstName = document.querySelector("#firstName").value
        const lastName = document.querySelector("#lastName").value

        const res = await newUser(email, password, firstName, lastName)
        const error = await JSON.parse(res.request.response).message
        setErrorMessage(error)
    }

    return <>
        <main className="main bg-light">
            <section className="sign-in-content">
                <div className="sign-in-header">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="input-wrapper">
                        <label htmlFor ="firstName">First name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor ="lastName">Last name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor ="password">Password</label>
                        <input type="password" id="password" />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor ="email">Email</label>
                        <input type="email" id="email" />
                    </div>
                    {
                        errorMessage && <p>{errorMessage}</p>
                    } 
                    <button type="submit" className="button full-width filled-button">Create my account</button>
                </form>
            </section>
        </main>
    </>
}

export default SignUp