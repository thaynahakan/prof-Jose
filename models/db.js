const Sequelize = require('sequelize');

const sequelize = new Sequelize("sistemavendas", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then(function(){
        console.log("Conexão co banco de dados realizada com sucesso!");
    }).catch(function(err){
        console.log("Erro: Conexão com banco de dados não realizada com sucesso!", err);
    });

module.exports = sequelize;