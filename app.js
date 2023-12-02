const express = require('express');
const app = express();
const User = require('./models/Users');


app.get("/", async (req, res) => {
    res.send("Página inicial -  Bittencourt Baimyná");
});

app.post("/cadastrar", async (req, res) => {
   res.send("Página Cadastrar");
});

app.listen(4096, () => {
    console.log("Servidor acessado na porta 4096: ");
});