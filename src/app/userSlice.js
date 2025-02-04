import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchUserProfile, updateUserProfile, userLogin } from "../utils/api";


/** Create reducer and actions to be dispatched */
const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: null,
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
                state.userInfo = action.payload
            })
            .addCase(userDataThunk.rejected, (state) => {
                state.userInfo = null
            })
            /** Update User data thunks */
            .addCase(updateUserDataThunk.fulfilled, (state, action) => {
                state.userInfo = action.payload.data.body
            })
        }
})
export const { logout, rememberLog } = userSlice.actions

export default userSlice.reducer

/** Export state selectors */
export const selectUserInfo = state => state.user.userInfo
export const selectLogged = state => state.user.logged
export const selectToken = state => state.user.authToken


/** Async logic to be used in the reducer */
/** USer login thunk */
export const loginThunk = createAsyncThunk(
    "user/loginThunk",
    async ({email, password}, { rejectWithValue }) => { // thunkAPI doc => https://redux-toolkit.js.org/api/createAsyncThunk 
        try {
            const res = await userLogin(email, password)
            if (res.status === 400) {
                return rejectWithValue(res.error)
            }
            return res
        } catch (err) {
            return err
        }
    }
)

/** User infos Thunk */
export const userDataThunk = createAsyncThunk(
    "user/getUserData",
    async (token, { rejectWithValue }) => {
        try {
            const res = await fetchUserProfile(token)
            if (res.status === 401) {
                return rejectWithValue(res.error)
            }
            return res
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)

/** Update User infos Thunk */
export const updateUserDataThunk = createAsyncThunk(
    "user/updateUserData",
    async ({ firstName, lastName, token }, { rejectWithValue }) => {
        try {
            const res = await updateUserProfile(firstName, lastName, token)
            return res
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)