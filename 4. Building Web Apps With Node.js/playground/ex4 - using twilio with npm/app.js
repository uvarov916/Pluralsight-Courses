// Twilio Credentials
var accountSid = '[accountSid]'; // insert accountSid 
var authToken = '[authToken]'; // insert authToken

var twilio = require('twilio');
var client = twilio(accountSid, authToken);

client.messages.create({
  from: "+16179350836",
  to: "+16178740201",
  body: "Node.js god is here"
}, function(err, message) {
  if (err === null) {
    console.log("Success!");
  }
  else {
    console.error(err.message);
  }
});