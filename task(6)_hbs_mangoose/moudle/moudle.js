const mongoose = require('mongoose');
const validator = require("validator")
const taskModel = mongoose.model("task5", {
    title: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: {
        type: Number,
        required: true,
    },
    status: {
        type:Boolean,
        default:false

    },
    gender: {
        type: String,
        TolowerCase: true,
        enum: ["male", "email"]
    },
    addTo: {
        type: Date,
        default:Date.now()
    }

})

module.exports=taskModel