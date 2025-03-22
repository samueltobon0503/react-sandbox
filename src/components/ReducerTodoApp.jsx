import { useReducer, useState } from "react"
import { todoReducer } from "../Reducer/todoReducer"

const initState = [];
export const ReducerTodoApp = () => {

    const [todoState, distpatch] = useReducer(todoReducer, initState)
    const [todoText, setTodoText] = useState("")

    const onInsertTodo = () => {
        console.log("Insert Todo")

        const newTodo = {
            id: new Date().getMilliseconds(),
            text: todoText,
            done: flase
        }
    }

    const onInputChange = (e) => {
        const value = e.target.value;
        setTodoText(value);
    }

    const action = {
        type: todoTypes.add,
        payload: newTodo
    }

    distpatch(action){
        setTodoText("")
    }

    return (
        <>
            <h1>Implementacion del Reducer</h1>
            <input
                value={todoText}
                onChange={onInputChange}
            />
            <button
                onClick={onInsertTodo}
            >
                New Task
            </button>


        </>
    )


}

