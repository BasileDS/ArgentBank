import { Link } from "react-router-dom"
import store from "../app/store"
import { logout } from "../app/userSlice"
import { useSelector } from "react-redux"

function Header () {

    const logged = useSelector( state => state.user.logged )

    const handleLogOut = () => {
        store.dispatch(logout())
    }

    return <>
        <header>
            <nav className="main-nav">
                <Link  className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src="./src/assets/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    { 
                    logged ? (
                        <Link onClick={handleLogOut} className="main-nav-item" to="/signin">
                            Log Out
                        </Link >
                    ) :
                        <Link  className="main-nav-item" to="/signin">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link >
                    }
                </div>
            </nav>
        </header>
    </>
}

export default Header