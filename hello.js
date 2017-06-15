// Create server
var http = require('http');
var server = http.createServer();

// Create Gun
var Gun = require('gun');
var gun = Gun({ web: server });

server.listen(8080, function() {
    console.log('Server listening on http://localhost:8080/gun')
});

var greetings = gun.get('greetings');

greetings.put({
    hello: 'world',
});

greetings.on(function (update) {
    console.log('Update:', update);
});