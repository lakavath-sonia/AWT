const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer(function(req, res) {
    if (req.url === "/") {
        res.write("<h1>Welcome to my web site</h1>");
        res.end();
    }
    if (req.url === "/IT") {
        res.write("<h1>This is IT dept. of my website</h1>");
        res.end();
    }
    if (req.url == "/a")
        res.readFile("file.txt", function(err, data) {
            res.write(data);
            res.end();

        })
});
server.listen(8000);
console.log("Server is listening on port number 8000...");