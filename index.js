//importo la libreria de express y la meto en una constante
const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("El servidor corre en el puerto 3000-------------");
});

app.get("/", (req, res) => {
  res.send;
});
