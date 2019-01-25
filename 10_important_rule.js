/********notes
    doStuff()
    .then(doMoreStuff)
    .then(null, complainAboutJavascript);

Maybe we should combine the last two lines since one is a fulfill
handler and the other is a rejection handler?  NO!  While this
might initially seem sensible consider what would happen if
doMoreStuff threw an error.  Since the promise returned from it
would be rejected, it would look for the next rejection handler
to handle it.

Remember: A promise can never resolve more than once.

It is, therefore, a best practice to always put a rejection handler
at the bottom of your promise chain (much like a catch block).

Many promise libraries try to ameliorate this problem for you
by providing a done handler that simply handles any uncaught
errors.  The rule of thumb is this:

  > If you are **not** returning a value from your promise to a caller,
  > then attach a `done` handler to guard against uncaught exceptions.

An example is shown below:

    doStuff()
    .then(doMoreStuff)
    .then(null, complainAboutJavascript)
    .done();

**********/

/********task

  * Create a function `alwaysThrows` that throws an `Error` withtext `"OH NOES"`;
  * Create a function `iterate` that prints the first argument(an integer) to it and then returns that argument + 1;
  * Create a promise chain using `Promise.resolve` that wraps your iterate method, then a series of iterations that attempts to perform `iterate` a total of 10 times.
  * Attach a rejection handler at the bottom of your chain to print the`error.message` using `console.log`.
  * Insert a call to `alwaysThrows` after your 5th call of `iterate`

If you have done this correctly, your code should print 1,2,3,4,5,
"[Error: OH NOES]".  It's important to notice that the thrown exception was
turned into a rejected promise which caused the rejected promise to
travel down the promise chain to the first available rejection handler.

*********/

function alwaysThrows()
{
	throw new Error("OH NOES");
}

function iterate(arg)
{
	console.log(arg);
	return arg+1;
}

var promise = Promise.resolve(iterate(1))
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.catch(function (e){
	console.log(e.message);
});

/********official solution
    function iterate(num) {
      console.log(num);
      return num + 1;
    }

    function alwaysThrows() {
      throw new Error('OH NOES');
    }

    function onReject(error) {
      console.log(error.message);
    }

    Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);
***********/