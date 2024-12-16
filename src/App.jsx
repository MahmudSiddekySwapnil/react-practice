import { useState } from "react";
import "./App.css";

function App() {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [input, setInput] = useState(""); // State to store input value

    // Add a new task
    const addTask = () => {
        if (input.trim() !== "") {
            setTasks([...tasks, input]); // Add task to the list
            setInput(""); // Clear input field
        }
    };

    // Remove a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks); // Update the list
    };

    return (
        <div className="App">
            <h1>My To-Do List</h1>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}
                        <button onClick={() => removeTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
