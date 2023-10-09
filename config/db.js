const mongoose = require("mongoose");

require('dotenv').config()

const connection = mongoose.connect("mongodb+srv://Vamsi:mongoPassword@cluster0.lvk3zjg.mongodb.net/c3evaluation");

module.exports = {connection};