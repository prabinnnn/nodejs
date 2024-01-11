const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("i hate u");
  })
  .listen(8000);
console.log("server is running");
