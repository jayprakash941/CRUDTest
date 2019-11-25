const express = require('express');
const bodyParser =  require('body-parser');
const cors  = require('cors');
const http = require('http');
const morgan = require('morgan')

const app = express();
const settings = require('./setting');
const mongo = require('./config/database.config');
const config = require('./config/'+settings.default.environment+'.config.js');
const logger = require('./config/logger.config.js').logger;
const userRouter = require('./modules/users/user.route.js');
const todoRouter = require('./modules/todo/todo.route.js');
const path = require('path')

//Logger Configuration
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

//set port

const port = settings.default.port;

mongo.connectToMongoDb();
app.use(cors());
const server = http.createServer(app)

app.use(bodyParser.json({
    extended: true,
    limit: '500mb'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '500mb'
}));
app.use(express.static(path.join(__dirname, 'build')));

app.use(require("morgan")("combined", { "stream": logger.stream }));
app.use('/api',userRouter);
app.use('/api',todoRouter);
server.listen(port, () => {
    logger.info(`Server started on port : ${port}`);
});

