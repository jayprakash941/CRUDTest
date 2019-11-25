const auth = require('./auth');
const UserService = require('../users/user.service');
module.exports.verify =  async (req,res,next)=>{
    
let tokenSignature = req.headers["x-auth-token"];
if (tokenSignature != undefined) {
    let token = await auth.verifyAndDecode(tokenSignature);
    console.log("token value")
    console.log(token)
    if (token) {
      let loggedInUser = await UserService.getUserByUserId(token.data.user_id);
      req.userToken = token;
      console.log(loggedInUser)
      if (loggedInUser && token.valid) {
        return next();
      } else {
        res.status(401).send({
          status: "error",
          code: 401,
          message: "Token Invalid",
          data: {}
        });
      }
    } else {
      res.status(401).send({
        status: "error",
        code: 440,
        message: "Session expire! Please login..",
        data: {}
      });
    }
  } else {
    res.status(401).send({
      status: "error",
      code: 401,
      message: "Authentication Failure",
      data: {}
    });
  }

}

