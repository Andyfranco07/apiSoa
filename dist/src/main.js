"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ImageModel_1 = require("./images/infrastructure/ImageModel");
const ImageRouters_1 = __importDefault(require("./images/infrastructure/ImageRouters"));
const app = (0, express_1.default)();
app.use('/images', ImageRouters_1.default);
ImageModel_1.ImageModel.sync().then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
});
