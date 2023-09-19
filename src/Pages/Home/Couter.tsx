import { useReducer } from "react";
type state = {
    count: number
}
type action = { type: "add" } | { type: "sub" } | { type: "reset" }
const reducer = (state: state, action: action) => {
    switch (action.type) {
        case "add":
            return { ...state, count: state.count + 1 };
        case "sub":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        default:
            throw new Error("Unexpected action");


    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "add" })}>Add</button>
            <button onClick={() => dispatch({ type: "sub" })}>Sub</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
};

export default Counter;