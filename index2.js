const http = require("domain");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "htm/txt" });
    res.read("hello world");
    res.write("ur is hero");
  })
  .listen(3000);
console.log("server is running");
