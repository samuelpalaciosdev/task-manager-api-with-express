const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); // Find all tasks
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: err });
  }
};
const getTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id: id }); // Return the id of the task
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateTask = (req, res) => {
  res.status(200).send('Task updated!');
};

const deleteTask = (req, res) => {
  res.status(200).send('Task deleted!');
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
