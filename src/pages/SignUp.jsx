import { newUser } from "../utils/api"


function SignUp () {

    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = document.querySelector("#email").value
        const password = document.querySelector("#password").value
        const firstName = document.querySelector("#firstName").value
        const lastName = document.querySelector("#lastName").value

        newUser(email, password, firstName, lastName)
    }

    return <>
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="sign-in-button">Create my account</button>
                </form>
            </section>
        </main>
    </>
}

export default SignUp