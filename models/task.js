const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide name'],
    trim: true,
    maxLength: [20, `Name can't be more than 20 chars`],
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
});

module.exports = mongoose.model('Task', taskSchema);
