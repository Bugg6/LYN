var fs = require('fs');


let directory = process.argv[2];
let fileType = process.argv[3];

function filtered() {
  fs.readdir(directory, function fileList(err, list){
    let results = [];
    list.forEach(file => {
      if (file.includes(`.${fileType}`)) {
        results.push(file);
      }
    });
    results.forEach(file => {
      console.log(file);
    });
  });
}

filtered();
