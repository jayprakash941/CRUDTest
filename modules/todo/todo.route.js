const express = require('express');
const todoController = require('./todo.controller');
const userVerify = require('../auth/verify');
const todoRouter = express.Router();


//userVerify.verify,
todoRouter.post('/task/:user_id',userVerify.verify,todoController.addTask);
todoRouter.put('/task/:user_id/:_id',todoController.editTask);
todoRouter.get('/task/:user_id',userVerify.verify,todoController.getAllTask);
todoRouter.delete('/task/:user_id/:_id',todoController.deleteTask);


module.exports = todoRouter;
