//proves that promises only happen once

var promise = new Promise(function (resolve, reject) {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE!'));
});

function onReject(error) {
  console.log(error.message);
}

promise.then(console.log, onReject);

/********official solution

    var promise = new Promise(function (fulfill, reject) {
      fulfill('I FIRED');
      reject(new Error('I DID NOT FIRE'));
    });

    function onReject(error) {
      console.log(error.message);
    }

    promise.then(console.log, onReject);

*********/