import BankAccountCard from "../components/BankAccountCard"
import ProfileHeader from "../components/ProfilHeader"

function Profile () {
  return <>
      <main className="main bg-light">
        <ProfileHeader />
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