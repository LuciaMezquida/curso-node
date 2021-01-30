const express = require("express");

//nos permite usar diferentes tipos de rutas y usarlas en otros archivos
const router = express.Router();

//localhost:3000/
//vamos a crear todas las rutas

//localhost:3000/ + /obtenerUsuario
router.get("/obtenerUsuario", (req, res) => {
  res.send("Esta es la ruta de obtener usuario");
});
//exportar el modulo router

module.exports = router;
