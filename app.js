// Hello You
// Let's start with a simple Hello server. Follow the tasks below to create a simple Node server that outputs a greeting.
// First, tell the response which status it should have (a successful status is 200).
// Next, write a message to the response body in the form of "Hello, this is <your name here>".
// To finish it up, tell the response to end so the client on the other side knows it has received all the data.
//Original Code
// var fs = require('fs');
// var contents = fs.readFile('index.html');
// console.log(contents);
//Original Code Above

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Candice Brown");
  response.end();
}).listen(8080);

//Convert Blocking
//Not everyone knows why it's important to write non-blocking programs in Node.js. 
//One of these unfortunate souls has written some code to read a file off the file-system using the blocking function readFileSync. 
//Convert the code to be non-blocking using the readFile function instead.
// Start by changing the call from readFileSync() to readFile().
// Next, add a callback method to the readFile() call. This method should accept error and contents parameters.
// To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.
// Original Code below
// var fs = require('fs');
// var contents = fs.readFileSync('index.html');
// console.log(contents);
// Original Code above

// var fs = require('fs');
// fs.readFile('index.html', function(error, contents){
//   console.log(contents);
// });

//Read File in Server 
//Now that you know how to create an HTTP server and how to read a file off the filesystem in a non-blocking way, 
//let's try to combine the two.
//Instead of just writing a string to the HTTP response, write the contents of index.html to the response instead.
//After response.writeHead(200), add a call to fs.readFile() that reads index.html asynchronously. 
//Remember to pass a callback function, that accepts an error parameter, and a contents parameter.
//Now that you have the file contents, write it to the response.
//To finish up, end the response after the file contents have been written.

var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents){
  response.write(contents);  
  response.end();
  });
}).listen(8080);

//Writing Response Headers 
//Up until now all we've been sending into the response.writeHead() function is the status code. 
//However, it can take additional parameters.
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/html'
//   });

//   fs.readFile('index.html', function(err, contents) {
//     response.write(contents);
//     response.end();
//   });

// }).listen(8080);


//Response End
//Our original Hello server can be shortened since the response.end() function optionally takes data as a parameter. 
//Remove the response.write line altogether, and send the hello string as a parameter on the response.end function. 
//This will send the data, and once finished add the end to the response.
//Original Code Below
// var http = require('http');
// http.createServer(function(request, response) {
//   response.writeHead(200);
//   response.write("Hello, this is dog");
//   response.end();
// }).listen(8080);
//Original Code Above

//Instead of passing the content to response.write(), pass it to response.end().
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.end("Hello, this is dog");
}).listen(8080);
