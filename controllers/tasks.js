const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({}); // Find all tasks (docs)
  res.status(200).json({ tasks });
});
const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id }); // Find task by id
  if (!task) {
    return res.status(404).json({ msg: `No task with id ${id}` });
  }

  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true, // Return the new element updated and use the validators
  });

  if (!task) {
    return res.status(404).json({ msg: `No task with id ${id}` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).json({ msg: `No task with id ${id}` });
  }
  res.status(200).json({ task });
});

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
