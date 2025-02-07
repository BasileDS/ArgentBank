import store from "../app/store"
import { userDataThunk } from "../app/userSlice"

export default function isConnected (storeLogged) {
    const tokenLocalStorage = window.localStorage.getItem("authToken") 

    if (storeLogged === false && tokenLocalStorage) {
      store.dispatch(userDataThunk(tokenLocalStorage))
      return true
    }

    return false
} 