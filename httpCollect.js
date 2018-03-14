var http = require('http');

let url = process.argv[2];

var bl = require('bl');

http.get(url, function(res) {
  res.pipe(bl(function(error, data) {

    if (error) return console.log(error);

    console.log(data.length);
    console.log(data.toString());
  }));
});
