require('dotenv').config()
const express = require("express");
const dotenv = require("dotenv");

const {connection} = require("./config/db");

const {todosmodel} = require("./models/todo.model");

const app = express();

app.use(express.json());

const PORT = 8000;

app.get("/todos", async (req, res) => {
    const todolist = await todosmodel.find();
    res.send({todolist});
})

app.post("/todos/create", async (req, res) => {
    await todosmodel.create(req.body);
    res.send("todos created")
})

app.delete("/todos/:todoID",async (req, res) => {
    const ID = req.params.todoID;
    await todosmodel.findByIdAndDelete(ID)
    res.send("todo deleted");
})

app.put("/todos/:todoID", async (req, res) => {
    const ID = req.params.todoID;
    await todosmodel.findByIdAndUpdate(ID, req.body)
    res.send("todo updated");
})

app.listen(PORT, async () => {
    try{
        await connection;
        console.log("connected to DB successfully!");        
    }
    catch(err) {
        console.log("error connecting to DB");
        console.log(err);
    }
    console.log(`listening on ${PORT}`);
})