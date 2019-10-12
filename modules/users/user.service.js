let userModel = require('./user.model');

let userService ={
    createUser: async (data)=>{
        try {
            return  await  new userModel(data).save();
        } catch (error) {
            throw error
        }
    }
}

module.exports = userService;