import { useReducer, useState } from "react"
import { todoReducer } from "../Reducer/todoReducer"
import { todoTypes } from "../Types/todoTypes";

const initState = [];
export const ReducerTodoApp = () => {

    const [todoState, dispatch] = useReducer(todoReducer, initState)
    const [todoText, setTodoText] = useState("")

    const onInsertTodo = () => {
        console.log("Insert Todo")

        const newTodo = {
            id: new Date().getMilliseconds(),
            text: todoText,
            done: false
        }

        const action = {
            type: todoTypes.add,
            payload: newTodo
        }

        dispatch(action);
        setTodoText("");
    }

    const onInputChange = (e) => {
        const value = e.target.value;
        setTodoText(value);
    }

    return (
        <>
            <h1>Implementacion del Reducer</h1>

            <div class="input-group">
                <input type="text"
                    class="form-control"
                    value={todoText}
                    onChange={onInputChange} />
                <span class="input-group-btn">
                    <button
                        class="btn btn-default"
                        onClick={onInsertTodo}
                        type="button">Insert To do</button>
                </span>
            </div>

            <div className="container">
                <ul class="list-group">

                    {todoState.map((todo) => {
                        return (
                            <li key={todo.id} class="list-group-item"
                            >{todo.text}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

