import axios from "axios"

const API_URL = "http://localhost:3001/api/v1"

export async function userLogin(email, password) {
    try {
        const res = await axios.post(
            `${API_URL}/user/login`,
            {
                email: email,
                password: password
            })
        return res.data

    } catch (err) {
        return err
    } 
}

export async function getUserProfile(token) {
    console.log(`Bearer ${token}`)
    
    const res = await axios.get(
        `${API_URL}/user/profile`,
        `Bearer ${token}`
    )

    return res
}