const express = require('express');
const userController = require('./user.controller');
const userVerify = require('../auth/verify');
const userRouter = express.Router();

userRouter.post('/user/signup',userController.signUp);
userRouter.post('/user/loging',userController.logIn);

module.exports = userRouter;
