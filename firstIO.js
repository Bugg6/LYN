var fs = require('fs');
let filename = process.argv[2];
let content = fs.readFileSync(filename).toString();

let newLineArray = content.split('\n');


let count = newLineArray.length- 1;

console.log(count);
