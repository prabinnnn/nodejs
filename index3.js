const http = require("http");
http
  .createServer((res, req) => {
    res.writehead(200, { "content-type": "htm-text" });
    res.write("i hate u");
  })
  .listen(4000);
console.log("server is running");
