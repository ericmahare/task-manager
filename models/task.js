const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Task name is required!"],
    unique: true,
    trim: true,
    maxlength: [20, 'Name cannot have more than 20 characters']
  },
  completed: {
    type: Boolean,
    default: false
  }
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task
