var express = require('express');
const testcontrolar = require('../controlar/test.controlar');
var router = express.Router();

router.get("/", testcontrolar.showAll )
router.get("/add", testcontrolar.add )
router.get("/filter", testcontrolar.filter )
router.get("/addPost", testcontrolar.addPost )
router.post("/addTaskPost", testcontrolar.addTaskPost )
router.post("/filterActive", testcontrolar.filterActive )
router.get("/addTask", testcontrolar.addTask )
router.get("/edit/:id", testcontrolar.editRender )
router.post("/editUserPost/:id", testcontrolar.editActive)
router.get("/del/:id", testcontrolar.delete )
router.get("/single/:id", testcontrolar.single )
router.get("/activate/:id", testcontrolar.active )

module.exports=router