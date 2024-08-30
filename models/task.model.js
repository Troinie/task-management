const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    deleted: {
        type: Boolean,
        default: false // người dùng k truyền vào thì mặc định là false
    },
    deleteAt: Date
}, {
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema, "tasks");
// tasks là tên colection trong database

module.exports = Task;