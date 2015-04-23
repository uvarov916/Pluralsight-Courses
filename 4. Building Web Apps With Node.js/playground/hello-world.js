var http = require('http');

http.createServer(function(request, response){
  // Creates HTTP response header
  response.writeHead({
    'content-type': 'text/plain'
  });
  
  // Writes some text to response and ends it
  response.end("Hello World!");

  // Can be also done like this:
  // response.write("Hello World!");
  // response.end();
}).listen(3000); // listen on the port 3000 (127.0.0.1:3000)

console.log("Listening on the port 3000...");