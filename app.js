const express = require('express');
const app = express();
const port = 3000;

const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// prefix routes
app.use('/api/v1/tasks', tasks);

// routes

app.get('/', (req, res) => {
  res.status(200).send('Home page');
});

app.get('/api/v1/tasks'); // get all tasks
app.get('/api/v1/tasks/:id'); // get task by id
app.post('/api/v1/tasks'); // post create new task
app.put('/api/v1/tasks/:id'); // put update task
app.delete('/api/v1/tasks/:id'); // delete delete task

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
