const deal = require("../helper/dealWithJson.helper")
const moudel =require("../../moudle/moudle")
class testcontrolar {
    static async showAll(req, res) {
        let allUsers = await moudel.find()
        console.log(allUsers)
        res.render("all", {
            users: allUsers
        })
    }
    static add(req, res) {
        res.render("add")
    }
    static filter(req, res) {
        res.render("filter")
    }
    static async filterActive(req,res){
        let filter = req.body.filter
        let task =await moudel.find({title:{ "$regex": `${filter}`, "$options": "i" } })
        res.render("all",{
            users:task,
            filter:filter
        })

    }
    static addPost(req, res) {
        res.render("post")
    }
    static async addTask(req, res) {
        try {
            let newTasks = new moudel(req.query) 
            await newTasks.save()
            console.log(newTasks);
            res.redirect('/')
        } catch (e) {
            console.log(req.body);
            res.send(e)
        }
    }
    static async addTaskPost(req, res) {
        try {
            let newTasks = new moudel(req.body) 
            await newTasks.save()
            console.log(newTasks);
            res.redirect('/')
        } catch (e) {
            console.log(req.body);
            res.send(e)
        }

    }
    static delete(req, res) {
        let allTasks = deal.readfile()
        let taskId = req.params.id
        let index = allTasks.findIndex((item) => item.id == taskId)
        if (index != -1) {
            allTasks.splice(index,1)
        }
        deal.write(allTasks)
        res.redirect('/')
    }
    static async editRender(req, res) {
        try {
            let allUsers = await moudel.findById(req.params.id)
    
            res.render("edit", {
                allUsers
            })
        } catch (error) {
            //  console.log(error);   
        }
    }
    static async editActive(req, res) {
        try {
            req.body.status= req.body.status=="on" ?true:false
            await moudel.findByIdAndUpdate(req.params.id,req.body,{
                runValidators:true
            })
            res.redirect('/')
        } catch (e) {

            let error ={}
            error.title=  e.errors.title.message
            error.age=e.errors.age.message 
            error.email=e.errors.email.message
            res.send(error)
        }

    }
    static async single(req, res) {
        try {
            

        let allUsers = await moudel.findById(req.params.id)

        res.render("single", {
            allUsers
        })
    } catch (error) {
         console.log(error);   
    }
    }
    static async active(req, res) {
        try {
            let task =await moudel.findById(req.params.id)
            task.status = true
            await task.save()
            res.redirect('/')
        } catch (error) {
            console.log(error);
        }
    }

}
module.exports = testcontrolar