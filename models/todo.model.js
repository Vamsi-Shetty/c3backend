const mongoose = require("mongoose");

const TodosSchema = mongoose.Schema({
    "taskname" : {type: String, required: true},
    "status" : {type: String, required: true},
    "tag" : {type: String, required: true},
});

const todosmodel = mongoose.model("todo", TodosSchema);

module.exports = {todosmodel};