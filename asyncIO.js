var fs = require('fs');
let noNewLines;
function newLines(callback) {
  fs.readFile(process.argv[2], 'utf-8', function doneReading(err,contents){
    noNewLines = contents.split('\n').length - 1;
    callback();
  });
}
function logResult() {
  console.log(noNewLines);
}
newLines(logResult);
