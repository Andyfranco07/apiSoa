import { Image } from './Image';

export interface ImageRepository {
  save(filename: string, originalname: string): Promise<Image>;
  findAll(): Promise<Image[]>;
  findById(id: number): Promise<Image | null>;
  delete(id: number): Promise<void>;
}
