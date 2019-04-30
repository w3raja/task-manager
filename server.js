const http = require('http');
const app = require('./app');

const PORT = 80;

const server = http.createServer(app);


server.listen(3000, function(){

    console.log("welcome to the web developemnt course with node.js"+PORT);
})

