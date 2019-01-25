/******notes
 // The way you have learned: create promise through the constructor.

    var promise = new Promise(function (fulfill, reject) {
      fulfill('SECRET VALUE');
    });

    // Introducing: Promise.resolve
    // It does the exact same thing as above:

    var promise = Promise.resolve('SECRET VALUE');


    // Likewise...

    var promise = new Promise(function (fulfill, reject) {
      reject(new Error('SECRET VALUE'));
    });

    var promise = Promise.reject(new Error('SECRET VALUE'));
*******/

var promise = Promise.reject(new Error('REJECTED'));
promise.catch(function(error) {
  console.log(error.message)
})

/*********official solution
var message;
    var promise;

    function randomBytes(n) {
      return (Math.random() * Math.pow(256, n) | 0).toString(16);
    }

    message =
      'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
      randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
      'terminated in 3 seconds.';

    promise = Promise.reject(new Error(message));

    promise.catch(function (err) {
      var i = 3;

      process.stderr.write(err.message);

      setTimeout(function boom() {
        process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
        if (!i) {
          process.stderr.write('\n..... . . . boom . . . .....\n');
        } else {
          setTimeout(boom, 1000);
        }
      }, 1000);
    });
***********/