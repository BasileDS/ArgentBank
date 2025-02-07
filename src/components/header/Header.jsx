import { Link, NavLink } from "react-router-dom"
import store from "../../app/store"
import { logout, selectUserInfo } from "../../app/userSlice"
import { useSelector } from "react-redux"

import exitIcon from "../../assets/icon-exit.svg"

import "./header.css"

function Header () {
    const logged = useSelector( state => state.user.logged )
    const userInfo = useSelector(selectUserInfo)

    const handleLogOut = () => {
        window.localStorage.clear()
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
                <div className="main-nav-links">
                    { 
                    logged ? (<>
                        <NavLink className="main-nav-item" to="/profile">
                            <span className="rounded-icon">
                                <i className="fa fa-solid fa-user"></i>
                            </span>
                            {userInfo?.firstName}
                        </NavLink>
                        <NavLink onClick={handleLogOut} className="main-nav-item" to="/">
                            <img src={exitIcon} />
                            Log Out
                        </NavLink >
                        </> ) :
                        <NavLink  className="main-nav-item" to="/login">
                            <span className="rounded-icon">
                                <i className="fa fa-solid fa-user"></i>
                            </span>
                            Sign In
                        </NavLink >
                    }
                </div>
            </nav>
        </header>
    </>
}

export default Header