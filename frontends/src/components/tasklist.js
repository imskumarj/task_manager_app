// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete }) => {
    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map(task => (
                    <TaskItem key={task.id} task={task} onDelete={onDelete} />
                ))}
            </ul>
        </div>
    );
};

export default TaskList;