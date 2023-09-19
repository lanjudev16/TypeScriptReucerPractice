import { useReducer } from "react";
type State = {
    email: string,
    firstName: string,
    lastName: string,
    age: string
}
type Action = { type: "email"; payload: string } | { type: "firstName", payload: string } | { type: "lastName", payload: string } | { type: "age", payload: string }
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "email":
            return { ...state, email: action.payload }
        case "firstName":
            return { ...state, firstName: action.payload }
        case "lastName":
            return { ...state, lastName: action.payload }
        case "age":
            return { ...state, age: action.payload }
        default:
            return state;
    }
}
const FormPractice = () => {
    const [state, dispatch] = useReducer(reducer, { email: "", lastName: "", firstName: "", age: "" })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value
        const firstName = (e.currentTarget.elements.namedItem('firstName') as HTMLInputElement).value
        const lastName = (e.currentTarget.elements.namedItem('lastName') as HTMLInputElement).value
        const age = (e.currentTarget.elements.namedItem('age') as HTMLInputElement).value
        dispatch({ type: "email", payload: email });
        dispatch({ type: "firstName", payload: firstName });
        dispatch({ type: "lastName", payload: lastName })
        dispatch({ type: "age", payload: age })

    }
    console.log(state.email)
    return (
        <div className="lg:w-[1140px] mx-auto py-10 ">
            <div className="border-red-200 rounded-md border-[2px] p-10">

                <form onSubmit={(e) => { handleSubmit(e) }}  >
                    <div>
                        <h1>{state.email}</h1>
                        <h1>{state.firstName}</h1>
                        <h1>{state.lastName}</h1>
                        <h1>{state.age}</h1>
                    </div>
                    <div className="flex gap-3">
                        <input className="border-red-300 outline-none border-[2px] rounded-md px-2 text-red-300 placeholder:text-red-300 py-2 w-1/2" placeholder="First name" type="text" name="firstName" />
                        <br />
                        <input className="border-red-300 outline-none border-[2px] rounded-md px-2 text-red-300 placeholder:text-red-300 py-2 w-1/2" placeholder="Last name" type="text" name="lastName" />
                        <br />
                    </div>
                    <div className="flex gap-3 my-5">
                        <input className="border-red-300 outline-none border-[2px] rounded-md px-2 text-red-300 placeholder:text-red-300 py-2 w-1/2" placeholder="Email@gmail.com" type="email" name="email" />
                        <br />
                        <input className="border-red-300 outline-none border-[2px] rounded-md px-2 text-red-300 placeholder:text-red-300 py-2 w-1/2" placeholder="age" type="text" name="age" />
                        <br />
                    </div>
                    <div className="text-center">
                        <input className="mt-3 border-green-300 bg-green-300 px-3 py-2 rounded-md font-semibold w-1/2 mx-auto" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormPractice;