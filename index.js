const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("hello world");
  })
  .listen(8000);
console.log("server is running");
