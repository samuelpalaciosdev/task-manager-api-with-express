const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./routes/tasks');
const connectDb = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// prefix routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandler);

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
