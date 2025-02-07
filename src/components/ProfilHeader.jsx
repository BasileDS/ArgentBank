/* eslint-disable react/prop-types */
import { updateUserDataThunk } from "../app/userSlice"
import { useState } from "react"
import store from "../app/store"

export default function ProfileHeader ({user, token}) {
  const [updatingProfile, setUpdatingProfile] = useState(false)

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
    <div className="profile-header">
      <h1>Welcome back<br/>{`${user?.firstName} ${user?.lastName}` }</h1>
          {
            !updatingProfile ? (
              <button onClick={handleUpdate} className="button outlined-button">Edit Name</button>
            ) : (
              <form className="edit-profil-form">
                <div className="flex-20">
                  <input type="text" id="firstName" className="button outlined-light-button" placeholder={user?.firstName} />
                  <input type="text" id="lastName" className="button outlined-light-button" placeholder={user?.lastName} />
                </div>
                <div className="flex-20">
                  <button onClick={handleSubmit} type="submit" className=" button outlined-button">Edit name</button>
                  <button onClick={handleCancel} className="button outlined-button">Cancel</button>
                </div>
              </form>
            )
          }
    </div>
  </>
}