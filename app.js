const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
require('dotenv').config();

// middleware
app.use(express.json());

// prefix routes
app.use('/api/v1/tasks', tasks);

// routes
app.get('/', (req, res) => {
  res.status(200).send('Home page');
});

// Start up server funct

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI); // If the connection to the database is successful
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
