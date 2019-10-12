let path = require('path');

module.exports.default ={
    mongo: {
        database_name: "test",
        host: "localhost",
        port: "27017",
        username: "",
        password: ""
    },
    logs:{
        path:path.join(__dirname,'../logs'),
        file_name: 'development.ServiceApp.logs'
    }
}