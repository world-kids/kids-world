const router= require('express').Router();
const itemController = require("../item.js")


router.post('/signup',itemController.addKids);//Checked
router.post('/login',itemController.getKid);//Checked
router.put('/users',itemController.updates);//Checked
router.post('/admin',itemController.addQuizzByCategory);//Checked
router.get("/admin",itemController.getQuizzByCategory);//Checked


module.exports=router;