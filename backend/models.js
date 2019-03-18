//schemas
const mongoose = require('mongoose');
const mongo_connection = 'mongodb://localhost/restful_task_api';
mongoose.connect(mongo_connection, { useNewUrlParser: true});

var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean, default: false},
}, {timestamps: true});

module.exports = mongoose.model("Task", TaskSchema);
// refers to line 3 of controllers Task