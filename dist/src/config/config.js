"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    port: 3000,
    dbUser: 'sebas',
    dbPassword: 'sebasramirez11',
    dbHost: '18.215.206.23',
    dbName: 'ilusTrade',
    dbPort: 3306,
};
