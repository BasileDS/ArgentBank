import { useSelector } from "react-redux"
import { selectToken, selectUserInfo, updateUserDataThunk } from "../app/userSlice"
import { useState } from "react"
import store from "../app/store"





function UserHeader () {
  const [updatingProfile, setUpdatingProfile] = useState(false)
  
  const user = useSelector(selectUserInfo)
  const token = useSelector(selectToken)

  /** handle update dispatch action thunk */
  const handleSubmit = async (e) => {
    e.preventDefault()
    
    
    const getName = (type) => {
      const inputName = document.querySelector(`#${type}`).value

      switch (type) {
        case "firstName":
          if (inputName.length === 0 && user.firstName.length > 0) {
            return user.firstName
          }
          break;
        case "lastName":
            if (inputName.length === 0 && user.lastName.length > 0) {
              return user.lastName
            }
            break;
        default:
          break;
      }
      if (inputName.length === 0 || inputName.length === null) {
        return "Dos Santos"
      } else {
        return inputName
      }
    }
    const firstName = getName("firstName")
    const lastName = getName("lastName")
    
    store.dispatch(updateUserDataThunk({firstName, lastName, token}))
    
    setUpdatingProfile(false)
  }
  
  /** Handle edit and cancel edit state */
  const handleUpdate = () => {
    setUpdatingProfile(true)
  }

  const handleCancel = () => {
    setUpdatingProfile(false)
  }

  return <>
    <div className="header">
      <h1>Welcome back<br/>{`${user?.firstName} ${user?.lastName}` }</h1>
          {
            !updatingProfile ? (
              <button onClick={handleUpdate} className="edit-button">Edit Name</button>
            ) : (
              <form>
                <input type="text" id="firstName" placeholder={user?.firstName} />
                <input type="text" id="lastName" placeholder={user?.lastName} />
                <div>
                  <button onClick={handleSubmit} type="submit" className="edit-button">Edit name</button>
                  <button onClick={handleCancel} className="edit-button">Cancel</button>
                </div>
              </form>
            )
          }
    </div>
  </>
}



function User () {
  return <>
      <main className="main bg-dark">
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
  </>
}

export default User