import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../../config/database';

export class ImageModel extends Model {
  public id!: number;
  public filename!: string;
  public originalname!: string;
}

ImageModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    originalname: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'images',
    sequelize,
    timestamps: false,
  }
);
