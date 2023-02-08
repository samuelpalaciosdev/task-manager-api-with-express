const Task = require('../models/task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({}); // Find all tasks (docs)
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id }); // Find task by id
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
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

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).json({ msg: `No task with id ${id}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
