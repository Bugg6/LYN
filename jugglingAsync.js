var http = require('http');
var bl = require('bl');

let urls = process.argv.slice(2);
let results = [];
let count = 0;

urls.forEach((url, index) => {
  http.get(url, function (res) {
    res.pipe(bl(function(error, data) {
      if (error) return console.log(error);

      results[index] = data.toString();
      count ++;

      if (count === 3) {
        results.forEach(result => {
          console.log(result);
        });
      }

    }));
  });
});
