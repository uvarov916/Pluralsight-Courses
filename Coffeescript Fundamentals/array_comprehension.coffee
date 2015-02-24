# Iterating over array
collection = ['one', 'two', 'three']

# uppercased = (item.toUpperCase for item in collection)
uppercased = for item, index in collection
  item.toUpperCase() + index

console.log uppercased


# Iterating over key-value pairs of an object
tom =
  name: 'Tom'
  age: 8

for key, value of tom
  console.log "#{key}: #{value}"


# Function arguments
concat = (first, second, others...) ->
  first + second + others.join ''

result = concat 'one', 'two', 'three', 'four'
console.log result




upcase_all = (collection) ->
  item.toUpperCase() for item in collection

console.log upcase_all ["one", "two"]