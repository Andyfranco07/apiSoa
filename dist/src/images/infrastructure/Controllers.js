"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = exports.getImageById = exports.getAllImages = exports.uploadImage = void 0;
const ImageService_1 = require("../application/ImageService");
const ImageRepositoryImpl_1 = require("./ImageRepositoryImpl");
const imageService = new ImageService_1.ImageService(new ImageRepositoryImpl_1.ImageRepositoryImpl());
function uploadImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (!req.file) {
                res.status(400).json({ message: 'No file uploaded' });
                return;
            }
            const { filename, originalname } = req.file;
            const image = yield imageService.upload(filename, originalname);
            res.json(image);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
exports.uploadImage = uploadImage;
function getAllImages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const images = yield imageService.getAllImages();
            res.json(images);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
exports.getAllImages = getAllImages;
function getImageById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const image = yield imageService.getImageById(Number(req.params.id));
            if (!image)
                return res.status(404).json({ message: 'Image not found' });
            res.json(image);
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
exports.getImageById = getImageById;
function deleteImage(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield imageService.deleteImage(Number(req.params.id));
            res.json({ message: 'Image deleted successfully' });
        }
        catch (error) {
            res.status(500).json({ message: error });
        }
    });
}
exports.deleteImage = deleteImage;
