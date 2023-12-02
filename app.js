const express = require('express');
const app = express();

const db = require('./models/db')

app.get("/", async (req, res) => {
    res.send("Página inicial -  Bittencourt Baimyná");
});

app.listen(4096, () => {
    console.log("Servidor acessado na porta 4096: http://localhost:4096");
});