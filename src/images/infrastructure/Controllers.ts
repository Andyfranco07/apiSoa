import { Request, Response } from 'express';
import { ImageService } from '../application/ImageService';
import { ImageRepositoryImpl } from './ImageRepositoryImpl';

const imageService = new ImageService(new ImageRepositoryImpl());

export async function uploadImage(req: Request, res: Response) {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'No file uploaded' });
      return;
    }

    const { filename, originalname } = req.file;
    const image = await imageService.upload(filename, originalname);
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getAllImages(req: Request, res: Response) {
  try {
    const images = await imageService.getAllImages();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function getImageById(req: Request, res: Response) {
  try {
    const image = await imageService.getImageById(Number(req.params.id));
    if (!image) return res.status(404).json({ message: 'Image not found' });
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function deleteImage(req: Request, res: Response) {
  try {
    await imageService.deleteImage(Number(req.params.id));
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}