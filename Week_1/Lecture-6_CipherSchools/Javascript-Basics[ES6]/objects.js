const person = {
    FirstName: "John",
    LastName: "Doe",
    Age: 30,
    EyeColor: "Blue",
  };
  
  let id = Symbol("id");
  person[id] = 140111;
  console.log(person);

// Symbol is used to create a unique identifier for an object. 
// It is used to create private properties in an object. 
// It is a new primitive data type introduced in ES6. 
// The value of a symbol is unique and immutable.