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

async.series({
	one : function(c){
		console.log("1");
		//c(null,"hello");
		c("err","hi");
	},
	two : function(c){
		console.log("2");
		c(null,"there");
		
	},
	three : function(c){
		console.log("3");
		c(null,"class!");
		
	}
},
	function(err, results) {
		console.log(results);
	}
);