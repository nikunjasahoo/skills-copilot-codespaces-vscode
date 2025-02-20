// Create web server
// Create a web server that listens on port 8080 and responds with the comments.json file when a request is made to the root URL. The comments.json file contains an array of comments.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  fs.readFile(__dirname + '/comments.json', (err, data) => {
    if (err) {
      throw err;
    }
    res.end(data);
  });
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});