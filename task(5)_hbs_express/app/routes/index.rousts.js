var express = require('express');
const testcontrolar = require('../controlar/test.controlar');
var router = express.Router();

router.get("/", testcontrolar.showAll )
router.get("/add", testcontrolar.add )
router.get("/addPost", testcontrolar.addPost )
router.post("/addUserPost", testcontrolar.addUserPost )
router.get("/addUser", testcontrolar.addUserGet )
router.get("/edit/:id", testcontrolar.editRender )
router.post("/editUserPost/:id", testcontrolar.editActive)
router.get("/del/:id", testcontrolar.delete )
router.get("/single/:id", testcontrolar.single )


module.exports=router