var net = require('net');

let date = new Date();
let year = addZero(date.getFullYear());
let month = addZero(date.getMonth() + 1);
let day = addZero(date.getDate());
let hour = addZero(date.getHours());
let min = addZero(date.getMinutes());

function addZero(time) {
  if (time < 10) {
    return '0' + time;
  } else {
    return time;
  }
}

let finalDate = year + '-' + month + '-' + day + ' ' + hour + ':' + min;

let server = net.createServer(socket => {
  socket.write(finalDate);
  socket.end('\n');
});

server.listen(process.argv[2]);
