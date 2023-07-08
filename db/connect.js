const path = require('path')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config({path: path.resolve(__dirname, '../config.env')})

const connection = mongoose.connect(process.env.Local_DB)

module.exports = connection
