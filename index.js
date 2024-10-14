const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 1883;

server.listen(port, function() {
  console.log('server started and listening on port ', port);
  setTimeout(() => {
    aedes.publish({ topic: 'GET_ALL_COURSES', payload: '' });
  }, 10000);
});