const myFunction = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("This is inside Promise");
        resolve();
      }, 2000);
    });
  };
  
  myFunction()
    .then(() => {
      console.log("Resolved");
    })
    .catch(() => {
      console.error("Rejected");
    });

// Promise is a special object in JavaScript that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.