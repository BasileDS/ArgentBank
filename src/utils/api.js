import axios from "axios"

const API_URL = "http://localhost:3001/api/v1"

/** Log in user using email and password */
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

/** Gets User profile info */
export async function postUserProfile(token) {
    try {
        const res = await axios.post(
            `${API_URL}/user/profile`,
            {}, { 
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }
        )
        return res.data.body
    } catch (err) {
        return err
    }
}

/** Update User first and last name*/
export async function updateUserProfile(firstName, lastName, token) {
    try {
        const res = await axios.put(
            `${API_URL}/user/profile`,
            {
                firstName: firstName,
                lastName: lastName
            },
            { 
                headers: {
                    Authorization : `Bearer ${token}`
                }
            }
        )
        return res
    } catch (err) {
        return err
    }
}

/** Add new user*/
export async function newUser(email, password, firstName, lastName) {
    try {
        const res = await axios.post(
            `${API_URL}/user/signup`,
            {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName
            }
        )
        return res
    } catch (err) {
        return err
    }
}

