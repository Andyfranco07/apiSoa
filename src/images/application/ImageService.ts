import { ImageRepository } from '../domain/ImageRepository';
import { Image } from '../domain/Image';

export class ImageService {
  constructor(private imageRepository: ImageRepository) {}

  async upload(filename: string, originalname: string): Promise<Image> {
    return this.imageRepository.save(filename, originalname);
  }

  async getAllImages(): Promise<Image[]> {
    return this.imageRepository.findAll();
  }

  async getImageById(id: number): Promise<Image | null> {
    return this.imageRepository.findById(id);
  }

  async deleteImage(id: number): Promise<void> {
    return this.imageRepository.delete(id);
  }
}
