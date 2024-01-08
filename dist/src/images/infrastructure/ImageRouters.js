"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multerMiddleware_1 = __importDefault(require("../middlewares/multerMiddleware"));
const Controllers_1 = require("./Controllers");
const router = express_1.default.Router();
router.post('/upload', multerMiddleware_1.default.single('image'), Controllers_1.uploadImage);
router.get('/', Controllers_1.getAllImages);
router.get('/:id', Controllers_1.getImageById);
router.delete('/:id', Controllers_1.deleteImage);
exports.default = router;
