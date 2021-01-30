//importo la libreria de express y la meto en una constante
const express = require("express");
//libreria que recoge los datos
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("El servidor corre en el puerto 3000");
});
//localhost:3000 + en el primer parametro == localhost:3000/
app.get("/", (req, res) => {
  res.send("Salve Muka");
});
//localhost:3000/muka
app.get("/muka", (req, res) => {
  res.send("Salve Muka, dueña del mundo");
});

//localhost:3000/enviar
app.post("/enviar", (req, res) => {
  console.log("Esta es la ruta post");
  let data = req.body;
  console.log(data);
  res.send("Enviado");
});
