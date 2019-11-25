const userService = require("./user.service");
const logger = require("../../config/logger.config").logger;
const sha256 = require("sha256");
const auth = require("../auth/auth");
let userFunction = {
  signUp: async (req, res) => {
    try {
      const { name, email, dob, password } = req.body;
      if (!name && !email && !dob && !password)
        res.send({ code: 400, status: "Failed", message: "fields missing" });
        let isExist = await userService.getUserByUserEmail(email);
        if(isExist) res.status(409).send({code:409,message:'User alraedy registered. Please login..  '})
      let obj = {};
      obj.name = name;
      obj.email = email;
      obj.dob = dob;
      obj.password = password;
      let result = await userService.createUser(obj);
      logger.info("Sign up succesfully");
      res.send({
        code: 200,
        status: "success",
        success:true,
        message: "Sign up succesfully ",
        data: []
      });
    } catch (error) {
      logger.error("Error while Sign up succesfully" + error);
      res.send({
        code: 400,
        success:false,
        status: "Error",
        message: "Error while Sign up ",
        data: []
      });
    }
  },
  logIn: async (req, res) => {
    try {
      let email_id = req.body.email;
      let password = req.body.password;
      console.log(req.body)
      let loggedInUser = await userService.getLoginByEmail(email_id);
      if (loggedInUser.password === sha256(password)) {
        let payload = {
          user_id: loggedInUser._id,
          name:loggedInUser.name,
          email: loggedInUser.email,
          phone: loggedInUser.phone
        };
        res.send({
          code: 200,
          status: "success",
          success:true,
          data: await auth.getJwtToken(payload),
          message: "Sucessfully Login"
        });
      } else {
        res.status(401).send({
          code: 401,
          status: "error",
          success:false,
          data: {},
          message: "Invalid Password"
        });
      }
    } catch (error) {
      res.status(401).send({
        code: 401,
        status: "error",
        success:false,
        message: "Invalid Username/Password",
        data: {}
      });
    }
  }
};

module.exports = userFunction;
