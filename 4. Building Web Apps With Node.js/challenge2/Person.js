var _ = require('underscore');

function Person(properties) {
  // Using underscore to extend the constructed object with
  // some default values, and the with any user-provided
  // values.
  _.extend(this, {
    knowsKungFu: false
  }, properties);
}

module.exports = Person;