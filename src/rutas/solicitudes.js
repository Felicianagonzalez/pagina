const express = require("express");
const route = express.Router();

var options = {root:require("path").join(__dirname,"..//vistas")};

route.get("/", (req,res) =>
{
   //res.send("petición solucionada");
   res.sendFile(index.html, options);
});

route.get("/alumnos", (req,res) =>
{
   //res.send("petición solucionada");
   res.sendFile(alumnos.html, options);
});

module.exports = route;


