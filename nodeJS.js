var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

setTimeout(function(){
	try{
		throw new Error("eroor");
	}catch(e){
		console.log('i caught error');
	}
}, 2000);

try{
	setTimeout(function(){
		throw new Error("yo");
	}, 2000);
}catch(e){
	console.log("another err");

	
}

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");