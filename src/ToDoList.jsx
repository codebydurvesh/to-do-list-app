import React, {useState} from "react" //imported useState

function ToDoList(){

    const [tasks, setTasks] = useState([]); // Tasks already present
    const [newTask, setNewTask] = useState(""); // Tasks user added at the moment

    function handleInputChange(event){
        setNewTask(event.target.value); // Getting value of task from the user
    }

    function addTask(){

        if(newTask.trim() !== ""){          // deny empty strings
            setTasks(t => [...t, newTask]); // adding new tasks
            setNewTask("")
        }

        
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index); 
        setTasks(updatedTasks); 
        // used filter so only the element with same index will be removed
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks= [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
            // switches the index
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks= [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
            // switches the index
        }
    }

    function handleKeyDown(event){
        if (event.key === "Enter"){
            if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
            // Adds a new task of Enter key is pressed in the input text box
        }
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task..."
                    value={newTask}
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyDown}
                />
                <button
                    className="add-button"
                    onClick={addTask}
                >
                    Add
                </button>

                <ol>
                    {tasks.map((task, index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>
                            <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                            >
                                ☝️
                            </button>
                            <button
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                            >
                                👇
                            </button> 
                        </li>)}
                </ol>
            </div>
        </div>
    );
}

export default ToDoList