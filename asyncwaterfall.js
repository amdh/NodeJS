var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);


// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");

var async = require("async");

async.waterfall([
		function(c){
			c(null,'a');
		},
		function(arg1,c){
			console.log(arg1);
			c(null , "c","b");
		},
		function(arg1,arg2,c){
			console.log(arg1);
			console.log(arg2);
			c(null,"done");
		}

	],
		
	function(err, results) {
		console.log(results);
		console.log(err);
	}
);