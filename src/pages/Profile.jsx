import { useSelector } from "react-redux"
import { selectLogged, selectToken, selectUserInfo } from "../app/userSlice"
import BankAccountCard from "../components/BankAccountCard"
import ProfileHeader from "../components/ProfilHeader"
import connectionRedirects from "../utils/connectionRedirects"
import { Navigate } from "react-router-dom"

function Profile () {
  const user = useSelector(selectUserInfo)
  const token = useSelector(selectToken)
  
  const logged = useSelector(selectLogged)
  connectionRedirects(logged)

  if (!logged) {
    return <Navigate replace to="/login" />
}

  return <>
      <main className="main bg-light">
        <ProfileHeader user={user} token={token} />
        <h2 className="sr-only">Accounts</h2>
        <div>
          <BankAccountCard accNb={"x8349"} accBalance={"2,082.79"} />
          <BankAccountCard accNb={"x6712"} accBalance={"10,928.42"} />
          <BankAccountCard accNb={"x8359"} accBalance={"184.30"} />
        </div>
      </main>
  </>
}

export default Profile