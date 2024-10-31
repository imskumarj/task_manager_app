// src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ onAdd }) => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = { name: taskName };
        
        // Make API call to add the task
        const response = await axios.post('/api/tasks', newTask);
        onAdd(response.data);
        setTaskName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={taskName} 
                onChange={(e) => setTaskName(e.target.value)} 
                placeholder="Enter task name" 
                required 
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
