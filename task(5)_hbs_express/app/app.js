require('dotenv').config()

const path =require("path")
const hbs = require("hbs")
const express =require("express")
const app =express()


app.use(express.static(path.join(__dirname,"../frontend/public")))
app.set('views', path.join(__dirname,"../frontend/views"));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,"../frontend/layouts"))


app.use(express.urlencoded({extended:true}))

const UserRouters =require("./routes/index.rousts.js")
app.use('/',UserRouters)

module.exports =app