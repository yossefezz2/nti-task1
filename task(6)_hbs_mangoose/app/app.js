require('dotenv').config()

const path =require("path")
const hbs = require("hbs")
const express =require("express")
const app =express()

const mongoose = require('mongoose');
mongoose.connect(process.env.dbUrl)

// const taskModel =require('../moudle/moudle')
// // const newUser =new taskModel({name:"yousef",age:15,email:"ahmed@gmail.com",status:false,gender:"male"})
// // newUser.save()

app.use(express.static(path.join(__dirname,"../frontend/public")))
app.set('views', path.join(__dirname,"../frontend/views"));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,"../frontend/layouts"))


app.use(express.urlencoded({extended:true}))

const taskRouters =require("./routes/index.rousts.js")
app.use('/',taskRouters)

module.exports =app