const express = require('express');
const app = express();
const User = require('./models/Users');

app.use(express.json());

app.get("/", async (req, res) => {
    res.send("Página inicial -  Bittencourt Baimyná");
});

app.post("/cadastrar", async (req, res) => {
   //console.log(req.body);

   await User.create(req.body)
   .then(() => {
      return res.json({
         erro: false,
         mensagem: "Usuário cadastrado com sucesso!"
      })
   }).catch(() => {
      return res.status(400).json({
         erro: true,
         mensagem: "ERRO: Usuário NÃO cadastrado com sucesso!"
      })

   });

   //res.send("Página Cadastrar");
});

app.listen(4096, () => {
    console.log("Servidor acessado na porta 4096: ");
});