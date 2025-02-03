import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../utils/api";


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
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.logged = true,
                state.authToken = action.payload.body.token
            })
            .addCase(loginThunk.rejected, (state) => {
                state.logged = false,
                state.authToken = null
            })
    }
})
export const { logout, rememberLog } = userSlice.actions

export default userSlice.reducer

/** Export state selectors */
export const selectLogged = state => state.user.logged
export const selectToken = state => state.user.authToken