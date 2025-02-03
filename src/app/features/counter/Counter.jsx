import store from "../../store"
import { increment, decrement } from "./counterSlice"
import { useSelector } from "react-redux"


/* Styles */
const style = {
    display: "flex",
    gap: "15px",
    justifyContent: "center"
}

const p = {
    padding: "10px 15px",
    border: "0.01rem solid lightgrey"
}

/* UI */
export default function Counter () {

    const points = useSelector((state) => state.counter.points)

    // const points = store.getState(state => state.points)

    console.log(points)

    return <>
        <h1>Points Counter</h1>
        <div style={style}>
            <p style={p}>Points 1 = {points}</p>
        </div>
        <div>
            <button onClick={() => store.dispatch(increment())}>Increment</button>
            <button onClick={() => store.dispatch(decrement())}>Decrement</button>
        </div>
    </>
} 