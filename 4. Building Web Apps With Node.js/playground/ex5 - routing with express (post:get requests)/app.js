var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(request, response) {
  response.send('Hello World from Express!');
});

app.get('/hello', function(request, response) {
  response.send({
    foo: 'bar'
  });
});

app.post('/doStuff', function(request, response) {
  var param = request.body.foo;

  response.send({
    foo: param
  });
});

app.listen(3000);