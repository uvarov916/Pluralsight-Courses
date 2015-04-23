var express = require('express');
var bodyParser = require('body-parser');

var app = express();
// URL parameters parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// Middleware function
function authUser(request, response, next) {
  var user = {
    name: 'Ivan',
    admin: true
  };

  request.user = user;
  next();
}

// Connects authUser as a middleware for the post request
// to the /doStuff
app.post('/doStuff', authUser, function(request, response) {
  var param = request.body.foo;

  response.send({
    foo: param,
    isAdmin: request.user.admin
  });
});

app.listen(3000);