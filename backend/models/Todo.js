const mongoose = require("mongoose")

const Todo = mongoose.Schema({
    text: {
        type: String,
    },
});