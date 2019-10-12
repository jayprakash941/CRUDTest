

const userService = require('./user.service');
const logger = require('../../config/logger.config').logger;

let userFunction ={

createUser : async (req,res) =>{
    try {
        const { Name, email, phone, status } = req.body;
        if(!Name&&!email&&!phone&&!status) res.send({code:400,status:'Failed',message:'fields missing'});
        let obj ={}
        obj.Name = Name;
        obj.email =email;
        obj.phone=phone,
        obj.status=status
        let result = await userService.createUser(obj);
        logger.info('User saved');
        res.send({
            code: 200,
            status: "success",
            message: "user added",
            data: result
          });
      }
       catch (error) {
        logger.error('Error while creating user');
        res.send({
            code: 400,
            status: "Error",
            message: "Error while creating user",
            data: []
          });
      }  
},
get: async (req, res)=>{
    res.json('k')
}
}

module.exports = userFunction
