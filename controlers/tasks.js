// Get all tasks
exports.getAllTasks = (req, res) => {
  res.send('All tasks')
}

// save tasks
exports.saveTasks = (req, res) => {
  res.send('Saving tasks...')
}

// Read single task
exports.getSingleTask = (req, res) => {
  res.send('Getting single task')
}

// Update Task
exports.updateTask = (req, res) => {
  res.send('Updating task')
}

// Delete Task
exports.deleteTask = (req, res) => {
  res.send('Deleting task')
}
