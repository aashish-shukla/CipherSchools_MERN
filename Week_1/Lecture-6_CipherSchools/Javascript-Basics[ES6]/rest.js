const addNumbers = (...args) => {
    console.log(args);
  };
  
  console.log(addNumbers(10, 14, 16, 22, 1, 45));
  
  const sumNumbers = (...args) => {
    let sum = 0;
    for (let arg of args) {
      sum += arg;
    }
    return sum;
  };
  
  console.log(sumNumbers(10, 14, 16, 22, 1, 45));

// Here (...args) is a "Rest parameter" which is used to pass an indefinite number of arguments to a function.
// The rest parameter is an array that contains all the arguments passed to the function.