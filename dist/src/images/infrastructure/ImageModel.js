"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../config/database");
class ImageModel extends sequelize_1.Model {
}
exports.ImageModel = ImageModel;
ImageModel.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    filename: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
    originalname: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    },
}, {
    tableName: 'images',
    sequelize: database_1.sequelize,
    timestamps: false,
});
