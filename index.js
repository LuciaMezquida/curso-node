//importo la libreria de express y la meto en una constante
const express = require("express");
//libreria que permite el acceso a la recogida de los datos
const bodyParser = require("body-parser");
const app = express();

const port = 3000;

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//utilizar la ruta que requiero/importo arriba del archivo /routes/index.js
//cuando hagamos un localhost:3000/, primero entrará en esta ruta
app.use("/", indexRouter);

app.use("/user", userRouter);

app.listen(port, () => {
  console.log("El servidor corre en el puerto 3000");
});
//localhost:3000 + en el primer parametro == localhost:3000/
// app.get("/", (req, res) => {
//   res.send("Salve Muka");
// });
// //localhost:3000/muka
// app.get("/muka", (req, res) => {
//   res.send("Salve Muka, dueña del mundo");
// });

// //localhost:3000/enviar
// app.post("/enviar", (req, res) => {
//   console.log("Esta es la ruta post");
//   let data = req.body;
//   console.log(data);
//   res.send("Enviado");
// });
