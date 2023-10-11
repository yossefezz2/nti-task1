const deal = require("../helper/dealWithJson.helper")
class testcontrolar {
    static showAll(req, res) {
        let allUsers = deal.readfile()
        res.render("all", {
            users: allUsers
        })
    }
    static add(req, res) {
        res.render("add")
    }
    static addPost(req, res) {
        res.render("post")
    }
    static addUserGet(req, res) {
        let newUserPost = { id: Date.now(), ...req.query }
        const addressType = deal.pop(newUserPost, "addressType");
        const addressDetails = deal.pop(newUserPost, "addressDetails");
        let address = [{ addressType: addressType, addressDetails: addressDetails }]
        let newUser = { ...newUserPost, address }
        let allUsers = deal.readfile()
        allUsers.push(newUser)
        deal.write(allUsers)
        res.redirect('/')
    }
    static addUserPost(req, res) {

        let newUserPost = { id: Date.now(), ...req.body }
        const addressType = deal.pop(newUserPost, "addressType");
        const addressDetails = deal.pop(newUserPost, "addressDetails");
        let address = [{ addressType: addressType, addressDetails: addressDetails }]
        let newUser = { ...newUserPost, address }
        let allUsers = deal.readfile()
        allUsers.push(newUser)
        deal.write(allUsers)
        res.redirect('/')
    }
    static delete(req, res) {
        let allUsers = deal.readfile()
        let UserId = req.params.id
        let index = allUsers.findIndex((item) => item.id == UserId)
        if (index != -1) {
            allUsers.splice(index, 1)
        }
        deal.write(allUsers)
        res.redirect('/')
    }
    static editRender(req, res) {
        let allUsers = deal.readfile()
        let UserId = req.params.id
        let index = allUsers.findIndex((item) => item.id == UserId)
        let singleUser
        if (index != -1) {
            singleUser = allUsers[index]
        }
        res.render("edit", {
            singleUser
        })
    }
    static editActive(req, res) {
        let UserId = req.params.id
        let editUserPost = { id: UserId, ...req.body }
        const addressType = deal.pop(editUserPost, "addressType");
        const addressDetails = deal.pop(editUserPost, "addressDetails");
        let address = [{ addressType: addressType, addressDetails: addressDetails }]
        let newEdit = { ...editUserPost, address }
        let allUsers = deal.readfile()
        let index = allUsers.findIndex((item) => item.id == UserId)
        if (index != -1) {
            allUsers[index] = newEdit
        }
        deal.write(allUsers)
        res.redirect('/')
    }
    static single(req, res) {
        let allUsers = deal.readfile()
        let UserId = req.params.id
        let index = allUsers.findIndex((item) => item.id == UserId)
        let singleUser
        if (index != -1) {
            singleUser = allUsers[index]
        }
        res.render("single", {
            singleUser
        })
    }


}
module.exports = testcontrolar