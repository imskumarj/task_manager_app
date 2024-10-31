// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
    user: 'n',
    host: 'n',
    database: 'n',
    password: 'n',
    port: 24203,
});

// Get all tasks
app.get('/api/tasks', async (req, res) => {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
});

// Add a new task
app.post('/api/tasks', async (req, res) => {
    const { name } = req.body;
    const result = await pool.query('INSERT INTO tasks (name) VALUES ($1) RETURNING *', [name]);
    res.json(result.rows[0]);
});

// Delete a task by ID
app.delete('/api/tasks/:id', async (req, res) => {
    const id = req.params.id;
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.sendStatus(204);
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});