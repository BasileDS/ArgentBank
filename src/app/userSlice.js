import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserProfile, userLogin } from "../utils/api";


/** Create reducer and actions to be dispatched */
const userSlice = createSlice({
    name: "user",
    initialState: {
        logged: false,
        authToken: null
    },
    reducers: {
        logout: state => { 
            state.logged = false
        }
    },
    extraReducers: (builder) => {
        builder
            /** User login thunks */
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.logged = true,
                state.authToken = action.payload.body.token
            })
            .addCase(loginThunk.rejected, (state) => {
                state.logged = false,
                state.authToken = null
            })
            /** get User data thunks */
            .addCase(userDataThunk.fulfilled, (state, action) => {
                state.user = action.payload
            })
    }
})
export const { logout, rememberLog } = userSlice.actions

export default userSlice.reducer

/** Export state selectors */
export const selectLogged = state => state.user.logged
export const selectToken = state => state.user.authToken


/** Async logic to be used in the reducer */
export const loginThunk = createAsyncThunk(
    "user/loginThunk",
    async ({email, password}, { rejectWithValue }) => { // thunkAPI doc => https://redux-toolkit.js.org/api/createAsyncThunk 
        try {
            const res = await userLogin(email, password)
            if (res.status === 400) {
                return rejectWithValue(res.error)
            }
            window.localStorage.setItem("authToken", res.body.token)
            return res
        } catch (err) {
            return err
        }
    }
)

export const userDataThunk = createAsyncThunk(
    "user/getUserData",
    async (token) => {
        try {
            const res = getUserProfile(token)
            console.log(res)
        } catch (err) {
            return err
        }
    }
)