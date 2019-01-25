//how to reject a promise

var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
    reject(Error('REJECTED!'))
  }, 300)
})
.then(undefined, function(error) {
  onReject(error)
})
function onReject(error) {
  console.log(error.message);
}

/**********official solution
 // Create a promise

    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, reject the promise with an `Error` object
      // with parameter `"REJECTED!"`.

      setTimeout(function () {
        reject(new Error('REJECTED!'));
      }, 300);
    });

    // Create a function to print `error.message` using `console.log`.

    function onReject(error) {
      console.log(error.message);
    }

    // Pass this function as a rejection handler to the `then` method of the
    // promise (the second parameter).

    promise.then(null, onReject);

**********/