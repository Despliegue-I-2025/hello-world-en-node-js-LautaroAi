const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.end("Hola mundo");
  // gracias por la ayuda
});

server.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000");
});
