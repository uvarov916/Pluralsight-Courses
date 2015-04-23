var http = require('http'),
    fs = require('fs');


http.createServer(function(request, response) {
  // Reads csv file asynchronously
  fs.readFile('./data.csv', 'utf-8', function(err, data) {
    // for collecting response data
    var responseData = {};
    var lines = data.split('\n');
    
    lines.forEach(function(line) {
      var words = line.split(',');
      responseData[words[0]] = words[1];
    });

    response.writeHead(200, {
      'content-type': 'application/json'
    });
    response.end(JSON.stringify(responseData));    
  });

}).listen(3000);

console.log("Listening on port 3000...");