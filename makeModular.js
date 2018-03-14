var listFilter = require('./filterModule');

let directory = process.argv[2];
let extension = process.argv[3];

let callback = function (err, data) {
  if (err) {
    throw err;
  }
  data.forEach(file => {
    console.log(file);
  });
};

listFilter(directory, extension, callback);
