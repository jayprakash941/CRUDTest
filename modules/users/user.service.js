let userModel = require('./user.model');
const  sha256 = require("sha256");

let userService ={
    createUser: async user=>{
        try {
            user.password = await sha256(user.password);
            return  await  new userModel(user).save();
        } catch (error) {
            throw error
        }
    },
    getLoginByEmail : async EmailId => {
        try {
          const user = await userModel.findOne({email:EmailId});
          return user;
        } catch (error) {
          throw error;
        }
      },
      getUserByUserId : async id =>{
        try {
          return await userModel.findById({_id:id});
        } catch (error) {
          return error
        }
      },
      getUserByUserEmail : async email =>{
        try {
          return await userModel.findOne({email:email});
        } catch (error) {
          return error
        }
      }
}

module.exports = userService;