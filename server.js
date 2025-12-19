const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    // when a request comes in, a ,message is logged to the console with the current date followed by request method and URL
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World')
})
server.listen(3000);

// req => request object created by Node. Has property called .socket which is the lowest level TCP socket