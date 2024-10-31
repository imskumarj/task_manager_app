// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskList from '/components/TaskList';
import TaskForm from '/components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('/api/tasks');
        setTasks(response.data);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const deleteTask = async (id) => {
        await axios.delete(`/api/tasks/${id}`);
        setTasks(tasks.filter(task => task.id !== id));
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm onAdd={addTask} />
            <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
    );
};

export default App;