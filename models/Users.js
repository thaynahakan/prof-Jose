// Importa o Sequelize para interagir com o banco de dados
const Sequelize = require('sequelize');

// Importa uma instância previamente configurada do Sequelize (de um arquivo db.js, por exemplo)
const db = require('./db');
const sequelize = require('./db');

// Define o modelo 'User' que representa a tabela 'users' no banco de dados
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Os métodos abaixo são usados para sincronizar o modelo com o banco de dados
// User.sync() cria a tabela se ela ainda não existe
// User.sync({ alter: true }) verifica e realiza alterações na tabela com base no modelo
// No entanto, eles estão comentados, portanto, não estão sendo executados atualmente

// User.sync();
// User.sync({ alter: true })

// Exporta o modelo 'User' para ser usado em outros arquivos do projeto
module.exports = User;
