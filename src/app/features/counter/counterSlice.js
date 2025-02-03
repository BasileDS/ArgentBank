import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { points: 0 },
    reducers: {
        increment: state => { state.points += 1 },
        decrement: state => { state.points -= 1 }
    }
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer