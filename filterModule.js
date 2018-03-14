var fs = require('fs');
var path = require('path');

function listFilter(dir, ext, callback) {
  fs.readdir(dir, function fileList(err, data){
    if (err) {
      return callback(err);
    } else {
      data = data.filter(function(file) {
        if (path.extname(file) === '.' + ext) {
          return true;
        }
      });
      return callback(null, data);
    }
  });
}

module.exports = listFilter;
