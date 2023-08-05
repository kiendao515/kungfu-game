const express= require('express');
const userController = require('../controller/userController');
const router= express.Router();
router.post("/api/user/login",userController.login);
router.post("/api/user/add",userController.addUser)
module.exports = router;