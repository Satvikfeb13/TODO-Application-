const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://patilsatvik1324:VZufQqhkL0YxKgiC@todo.ifvnb.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}

