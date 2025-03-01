import { useState } from "react";

const TodoListApp = ({jobs}) =>{

    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState("");

    const addTask = () =>{
        const currentTasks = [...tasks];
        currentTasks.push(taskName);

        setTasks(currentTasks);
        setTaskName("");
    }

    const onInputChange = (e) =>{
        const value = e.target.value;
        setTaskName(value);
    }

    return (
        <>
        <div style={{margin: "20px"}}>
           <h1>Test</h1>
           <ul>
            {jobs.map((job, index) =>(
                <li key={{index}}>{job.name} takes {job.minutes} minutes</li>
            ))}
           </ul>
           <h1>Tasks</h1>
           <input onChange={onInputChange} value={taskName}/>
           <button onClick={addTask}>Add</button>
           <ul>
            {tasks.map((task) =>(
                <li>{task}</li>
            ))}
           </ul>
        </div>
        </>
    );
}

export default TodoListApp;