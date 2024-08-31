const mongoose = require("mongoose");
const generate = require("../../../helpers/generate");

const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
    token: String,
    deleted: {
        type: Boolean,
        default: false // người dùng k truyền vào thì mặc định là false
    },
    deleteAt: Date
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema, "users");
// users là tên colection trong database

module.exports = User;