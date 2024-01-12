const http = require("http");
const getMyage = require("./libaray/c");
http
  .createServer((req, res) => {
    getMyage.myage();
    res.writeHead(200, { "content-type": "htm/txt" });
    res.read("hello world");
    res.write("ur is hero");
  })
  .listen(3000);
console.log("server is running");
