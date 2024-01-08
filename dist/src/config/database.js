"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("./config");
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'mysql',
    host: config_1.config.dbHost,
    port: config_1.config.dbPort,
    database: config_1.config.dbName,
    username: config_1.config.dbUser,
    password: config_1.config.dbPassword,
});
