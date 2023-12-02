const express = require('express');
const app = express();

 app.get("/", async (req, res) => {
    res.send("Página inicial");
 }); 

 app.listen(8480, () => {
    console.log("Servidor iniciado na porta 8480: http://localhost:8480");
 });