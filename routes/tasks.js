const express = require('express')
const {getAllTasks} = require('../controlers/tasks')
// routes
const router = express.Router()
// home route
router.route('/')
  .get(getAllTasks)

module.exports = router
