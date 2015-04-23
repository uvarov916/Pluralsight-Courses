class Person
  constructor: (@age, @name) ->

  can_drive: ->
    minimum_driving_age = 17
    @age >= minimum_driving_age


liam = new Person 28, "Liam"

alert "#{liam.name} can drive: #{liam.can_drive()}"