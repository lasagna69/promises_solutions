/*********notes
To solve this problem, promises allow you to return another promise in the
then function callbacks. This new promise you return in the promise will in
turn be returned by then, so you can use it to do something after both of
the actions are done. For example, the above code can be replaced by:

    var originalPromise = Parse.User.logIn('user', 'pass');

    var findPromise = originalPromise.then(function (query) {
      // At this point, you have logged in.

      // query.find() returns another promise, which will become `findPromise`
      return query.find();
    });

    var savePromise = findPromise.then(function (results) {
      // At this point, the query finding is done.

      // The promise returned by `save` will become `savePromise`
      return results[0].save({ key: value });
    });

    savePromise.then(function (result) {
      // the object was saved
    });

which can then be simplified to:

    Parse.User.logIn('user', 'pass').then(function (query) {
      return query.find();
    }).then(function (results) {
      return results[0].save({ key: value });
    }).then(function (result) {
      // the object was saved
    });
*******/

/*****task
Call the first function in your program. first() will return a promise that
will be fulfilled with a secret value.

Call the second with the fulfilled value of first. Return the promise returned
by second in your onFulfilled callback.

Finally, print the fulfilled value of that new promise with console.log.
******/

first().then(function(res){
	return second(res);
}).then(function(res){
	onFulfilled(res);
});

function onFulfilled(res){
	console.log(res);
}


/*******official solution
//global first, second 

    var firstPromise = first();

    var secondPromise = firstPromise.then(function (val) {
      return second(val);
    });

    secondPromise.then(console.log);

    // As an alternative to the code above, you could also do this:
    // first().then(second).then(console.log);
*********/