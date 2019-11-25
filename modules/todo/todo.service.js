let todoModel = require('./todo.model');
const  sha256 = require("sha256");

let userService ={
  addTask: async (data)=>{
        try {
            return  await  new todoModel(data).save();
        } catch (error) {
            throw error
        }
    },
    editTask : async (taskId,user_id,data) => {
        try {
          return await todoModel.findOneAndUpdate({
            _id: taskId,user:user_id
          }, data, {
            strict: true,
            new: true
          });
        } catch (error) {
          throw error;
        }
      },

      getAllTask: async (user_id)=>{
        try {
          return await todoModel.find({user:user_id});
        } catch (error) {
          return error
        }
      },

      deleteTask : async (taskId,user_id)=>{
        try {
          return await todoModel.remove({_id:taskId,user:user_id});
        } catch (error) {
          return error
        }
      }
}

module.exports = userService;