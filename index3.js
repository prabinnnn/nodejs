const http = require("http");
const getlife = require("./libaray/h");
http
  .createServer((req, res) => {
    getlife.add();
    getlife.div();
    getlife.mul();
    getlife.sub();
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("i hate u");
  })
  .listen(8000);
console.log("server is running");
