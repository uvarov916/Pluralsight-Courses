map = (value) ->
  return if value % 3 is 0 and value % 5 is 0
    "fizzbuzz"
  else if value % 3 is 0
    "fizz"
  else if value % 5 is 0
    "buzz"
  else
    value

console.log map i for i in [1..100]