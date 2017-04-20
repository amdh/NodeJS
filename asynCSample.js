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

var f1 = function(){ console.log("1"); }
var f2 = function(){ console.log("2"); }
var f3 = function(){ console.log("3"); }

console.log("sync 1, 2, 3..")
async.series({

	one : function(callback){
			setTimeout(function(){
				f1();
				callback(null, 1);
			}, 9000);
	},

	two : function(callback){
		setTimeout(function(){
				f2();
				callback(null, 2);
			}, 10000);
	},

	
	three : function(callback){
		setTimeout(function(){
				f3();
				callback(null, 3);
			}, 3000);
	}
}) 