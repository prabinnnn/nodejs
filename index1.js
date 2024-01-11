const { read } = require("fs");
const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "htm/txt" });
    res.write("hello world");
  })
  .listen(3000);
console.log("server is running");
