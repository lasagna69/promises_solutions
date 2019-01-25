/******notes
If an error is thrown inside a function, it can be captured.

If an error is thrown inside a function, it will be handled by the next
available "rejection" handler.  This allows you to write code that looks
remarkably like a try/catch block would in synchronous code.

    try {
      doSomethingRisky();
      doAnotherRiskyThing();
    } catch (e) {
      console.log(e.message);
    }

The equivalent "promisified" code might look like:

    doSomethingRisky()
    .then(doAnotherRiskyThing)
    .then(null, console.log);
*****/
/********task
Some invalid JSON will be available on process.argv[2].

  * Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
  * Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.
********/

function parsedPromised(json) {
  return new Promise(function(resolve, reject) {
    try {
      resolve(JSON.parse(json));
    }
    catch(error) {
      reject(error);
    }
  })
}

parsedPromised(process.argv[2])
.catch(function(error) {
  console.log(error.message)
});

/*****official solution
function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

function onReject(error) {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);
******/