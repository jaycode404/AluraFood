import { useState, createContext } from "react";

export const CounterContest = createContext()

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const values = {
        count,
        suma(){
            setCount((val) => val + 1)
        },
        resta(){
            setCount((val) => val - 1)

        },
        user: {
            status: "Online",
            jwt:  "asdasd",

        }

    }
    return <CounterContest.Provider value={values}>{children}</CounterContest.Provider>
}