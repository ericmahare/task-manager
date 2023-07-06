const express = require("express");
const {
  getAllTasks,
  saveTasks,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controlers/tasks");
// routes
const router = express.Router();
// home route
router.route("/")
  .get(getAllTasks)
  .post(saveTasks);
router.route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
