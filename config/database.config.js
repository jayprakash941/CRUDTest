const Mongoose = require('mongoose');
const settings = require('../setting');
const logger = require('../config/logger.config.js').logger;

let config = require('./' + settings.default.environment + '.config');
Mongoose.Promise = global.Promise;

module.exports.connectToMongoDb = async ()=>{
 let host = config.default.mongo.host;
 let port = config.default.mongo.port;
 let username = config.default.mongo.username;
 let password = config.default.mongo.password;
 let database_name = config.default.mongo.database_name;
 let connectionString ='';

 if(settings.default.environment==="local"){
    connectionString = `mongodb://${host}:${port}/${database_name}`;
 }
 else if(settings.environment==="production"){
    connectionString ='production url'
 }else{
    connectionString ='staging'
 }
 try {
    let options = 
      { useNewUrlParser: true,
         useUnifiedTopology: true }      
        await Mongoose.connect(connectionString,options) ;
        logger.info(`MongoDB Connected to ${database_name}`)
 } catch (error) {
     logger.error('error in connecting mongoDB'+error);
 }
};