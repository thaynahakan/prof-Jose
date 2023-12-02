const express = require('express');
const app = express();
const User = require('./models/Users');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial -  Bittencourt Baimyná");
});

app.post("/cadastrar", async (req, res) => {
   console.log(req.body);
   res.send("Página Cadastrar");
});

app.listen(4096, () => {
    console.log("Servidor acessado na porta 4096: ");
});