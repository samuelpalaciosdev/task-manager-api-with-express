const getAllTasks = (req, res) => {
  res.status(200).send('This are all your tasks :)');
};

const getTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ id: id }); // Return the id of the task
};

const createTask = (req, res) => {
  res.status(200).json(req.body);
};

const updateTask = (req, res) => {
  res.status(200).send('Task updated!');
};

const deleteTask = (req, res) => {
  res.status(200).send('Task deleted!');
};

module.exports = { getAllTasks, getTask, createTask, updateTask, deleteTask };
