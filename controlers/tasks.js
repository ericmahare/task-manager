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
    if(!task) {
      return res.status(404).json({
        status: "Fail",
        message: "No task with id " + req.params.id
      })
    }
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
exports.updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findByIdAndUpdate(taskID, req.body, {
      new: true,
      runValidators: true
    })
    if(!task) {
      return res.status(404).json({
        message: `Task with id ${taskID} was not found!`
      })
    }
    res.status(200).json({
    status: "Success",
     data: {
      task
    }
  })
  } catch (err) {
    res.status(500).json({
      message: "An error occured"
    })
  }
}

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
   const task = await Task.findByIdAndDelete(taskID)
   if(!task) {
    return res.status(404).json({
      message: `Data with ${taskID} not found`
    })
   }
    res.status(204).json({
      data: null
    })
  } catch(err) {
    res.status(500).json({
      message: "An error occured"
    })
  }
}
