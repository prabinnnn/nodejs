const { read } = require("fs");
const getMath = require("./libaray/add");
const http = require("http");
http
  .createServer((req, res) => {
    getMath.sum();
    getMath.mul();
    getMath.sub();
    res.writeHead(200, { "content-type": "htm/txt" });
    res.write("hello world");
  })
  .listen(3000);
console.log("server is running");
