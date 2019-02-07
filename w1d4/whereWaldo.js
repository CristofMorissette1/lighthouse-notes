//create a function that iterates through with forEach
//have a call back function return the index value of Waldo with msg

function findWaldo(arr, found) {
    arr.forEach(function (element) {
      if (element === "Waldo") {
        found(arr.indexOf(element));   
      }
    })
  }
  
  function actionWhenFound(arr) {
    console.log("Found him! :" + arr);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);