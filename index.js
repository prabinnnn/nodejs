const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hello world");
  })
  .listen(3000);
console.log("server is running");
