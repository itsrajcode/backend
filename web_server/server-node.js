const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
   if (req.url === '/') {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Hello World');
   } else if (req.url === '/raj') {
       res.statusCode = 200;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Raj is here');
   } else {
       res.statusCode = 404;
       res.setHeader('Content-Type', 'text/plain');
       res.end('Not Found');
   }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})