require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = require("../../config");

// Importa el modelo Subscribed
const subscribedFactory = require("./Subscribed");

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    logging: false,
    native: false,
});

// Crea el modelo Subscribed
const Subscribed = subscribedFactory(sequelize);

// Si necesitas asociar la tabla 'Subscribed' con otras tablas, puedes hacerlo aquí

module.exports = {
    conn: sequelize,
    Subscribed,
};