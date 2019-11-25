const todoService = require("./todo.service");
const logger = require("../../config/logger.config").logger;
const sha256 = require("sha256");
const auth = require("../auth/auth");
let userFunction = {
  addTask: async (req, res) => {
    try {
      const { taskName, priority, startDate, endDate, comments } = req.body;
      let user_id = req.params.user_id;
      if (!taskName && !priority && !startDate && !endDate)
        res.send({ code: 400, status: "Failed", message: "fields missing" });
      let obj = {};
      obj.user=user_id;
      obj.taskName = taskName;
      obj.priority = priority;
      obj.startDate = startDate;
      obj.endDate = endDate;
      obj.comments = comments;
      let result = await todoService.addTask(obj);
      logger.info("Task created succesfully");
      res.send({
        code: 200,
        status: "success",
        success:true,
        message: "Task created succesfully ",
        task: result
      });
    } catch (error) {
      logger.error("Error while creating task" + error);
      res.send({
        code: 400,
        status: "Error",
        success:false,
        message: "Error while creating task ",
        task: []
      });
    }
  },
  editTask: async (req, res) => {
    try {
      let taskId = req.params._id;
      let user_id = req.params.user_id;

      const { taskName, priority, startDate, endDate, comments } = req.body;
      if (!taskName && !priority && !startDate && !endDate)
      res.send({ code: 400, status: "Failed", message: "fields missing" });
      let obj = {};
      obj.taskName = taskName;
      obj.priority = priority;
      obj.startDate = startDate;
      obj.endDate = endDate;
      obj.comments = comments;
      let result = await todoService.editTask(taskId,user_id,obj);
        res.send({
          code: 200,
          status: "success",
          success:true,
          message: "Task updated Sucessfully",
          task:result
        });
     
    } catch (error) {
      res.status(401).send({
        code: 401,
        status: "error",
        success:false,
        message: "Error while updating task",
        task: {}
      });
    }
  },
  getAllTask: async (req, res) => {
    try {
      let user_id = req.params.user_id;
      console.log("TCL: user_id", user_id)

      let tsks = await todoService.getAllTask(user_id);
      res.send({
        code: 200,
        status: "success",
        success:true,
        message: "listed Sucessfully",
        task:tsks
      });
    } catch (error) {
      res.status(401).send({
        code: 401,
        status: "error",
        success:false,
        message: "Error while listing task",
        task: {}
      });
    }
  },
  deleteTask: async (req, res) => {
    try {
      let user_id = req.params.user_id;

      let result = await todoService.deleteTask(req.params._id,user_id)
      res.send({
        code: 200,
        status: "success",
        success:true,
        message: "Task deleted Sucessfully",
        task:result
      });
    } catch (error) {
      res.status(401).send({
        code: 401,
        status: "error",
        success:false, 
        message: "Error while deleting task",
        task: {}
      });
    }
  }
};

module.exports = userFunction;
