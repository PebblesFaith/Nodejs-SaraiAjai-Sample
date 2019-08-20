var http = require('http');
var port = 3000;

var requestHandler = function(request, response){
    console.log('New request to:' + request.url);
    response.end('Hello World, I am Learning how to server setup');
}

var instructions = http.createServer(requestHandler);

instructions.listen(port, function() {
    console.log('Listening on port ' + port);
});