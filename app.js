//Here we required the http core module.
const http = require('http');
//Here we are grabbing the requestListener variable from the callbackFile.js
let { requestListener } = require('./callbackFile.js');
//here we created a port variable
const PORT = process.env.PORT || 3000;

//Here we are creating a web server. We passed a callback function in as the argument.
const server = http.createServer(requestListener);

//This allows the server to listen to incoming requests.
server.listen(PORT);

//You run node app.js to run the node web server. You should be able to view it in your browser with the port you assigned it.
