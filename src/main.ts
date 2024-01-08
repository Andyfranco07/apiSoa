import express from 'express';
import { ImageModel } from './images/infrastructure/ImageModel';
import imageRoutes from './images/infrastructure/ImageRouters';

const app = express();

app.use('/images', imageRoutes);

ImageModel.sync().then(() => {
  app.listen(3000, () => console.log('Server is running on port 3000'));
});
