const upperCase = require("to-upper");
const http = require("http");
http
  .createServer((req, res) => {
    const result = upperCase("hello prabin");
    upperCase.res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hello world");
  })
  .listen(5000);
console.log("server is running");
