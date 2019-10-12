const express = require('express');
const userController = require('./user.controller');
const userRouter = express.Router();

userRouter.post('/user',userController.createUser);
module.exports = userRouter;
