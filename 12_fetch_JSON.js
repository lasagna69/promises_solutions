//task is to fetch JSON from somewhere and console log it
//uses q-io's http module

var HTTP = require("q-io/http");
HTTP.read('http://localhost:1337')
.then(response => JSON.parse(response))
.then(console.log);

/**********official solution
var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function (json) {
  console.log(JSON.parse(json));
})
.then(null, console.error)
.done()
***********/