const Task = require('../models/task')
// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
  const tasks = await Task.find()
  res.status(200).json({
    status: "Success",
    data: {
      tasks
    }
  })
  } catch(err) {
    res.status(400).json({
      status: "Fail",
      message: "Bad request"
    })
  }
}

// save tasks
exports.saveTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({
      status: "Success",
      data: {
        task
      }
    })
  } catch(err) {
    res.status(400).json({
      status: "Fail",
      message: "Bad request"
    })
  }
}

// Read single task
exports.getSingleTask = async (req, res) => {
  try{
    const task = await Task.findById(req.params.id)
    res.status(200).json({
      status: "Succes",
      data: {
        task
      }
    })
  } catch(err) {
    res.status(500).json({
      status: "Fail",
      message: "An error occured"
    })
  }
}

// Update Task
exports.updateTask = (req, res) => {
  res.send('Updating task')
}

// Delete Task
exports.deleteTask = (req, res) => {
  res.send('Deleting task')
}
