import express from 'express';
import upload from '../middlewares/multerMiddleware';
import { uploadImage, getAllImages, getImageById, deleteImage } from './Controllers';

const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getAllImages);
router.get('/:id', getImageById);
router.delete('/:id', deleteImage);

export default router;
