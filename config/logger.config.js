const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const fs = require('fs');
const settings = require('../setting');

const config = require('../config/'+settings.default.environment+'.config.js');
const logs = config.default.logs;
const logDir = logs.path;



  
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}
module.exports.logger = new winston.Logger({
    level: 'info',
    transports: [
        new (winston.transports.Console)({
            colorize: true
        }),
        new DailyRotateFile({
            filename: logs.file_name,
            dirname: logs.path,
            mazsize : 1024 * 1024 * 20, //20 MB,
            maxFiles: 25,
            datePattern: '.dd-MM-yyyy'
        })
    ]
});

