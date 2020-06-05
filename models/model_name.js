/*
    Replace "model_name" by your model name and change fields
*/

// CALL packages
const mongoose = require('mongoose');

// DESIGN shcema
const model_name = mongoose.Schema({
    title    : String,
    content  : String,
    date: {
        type: Date,
        require: true,
        default: Date.now()
    },
});

// EXPORT model
module.exports = mongoose.model('model_name', model_name);
