import { ImageRepository } from '../domain/ImageRepository';
import { Image } from '../domain/Image';
import { ImageModel } from './ImageModel';

export class ImageRepositoryImpl implements ImageRepository {
  async save(filename: string, originalname: string): Promise<Image> {
    const image = await ImageModel.create({ filename, originalname });
    return new Image(image.id, image.filename, image.originalname);
  }

  async findAll(): Promise<Image[]> {
    const images = await ImageModel.findAll();
    return images.map((image) => new Image(image.id, image.filename, image.originalname));
  }

  async findById(id: number): Promise<Image | null> {
    const image = await ImageModel.findByPk(id);
    if (!image) return null;
    return new Image(image.id, image.filename, image.originalname);
  }

  async delete(id: number): Promise<void> {
    await ImageModel.destroy({ where: { id } });
  }
}
