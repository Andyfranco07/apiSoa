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
exports.ImageRepositoryImpl = void 0;
const Image_1 = require("../domain/Image");
const ImageModel_1 = require("./ImageModel");
class ImageRepositoryImpl {
    save(filename, originalname) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield ImageModel_1.ImageModel.create({ filename, originalname });
            return new Image_1.Image(image.id, image.filename, image.originalname);
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const images = yield ImageModel_1.ImageModel.findAll();
            return images.map((image) => new Image_1.Image(image.id, image.filename, image.originalname));
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield ImageModel_1.ImageModel.findByPk(id);
            if (!image)
                return null;
            return new Image_1.Image(image.id, image.filename, image.originalname);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield ImageModel_1.ImageModel.destroy({ where: { id } });
        });
    }
}
exports.ImageRepositoryImpl = ImageRepositoryImpl;
