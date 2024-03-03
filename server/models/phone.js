'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Phone.belongsToMany(models.Customer, {
        through: 'Order',
        foreignKey: 'phoneId',
      });
    }
  }
  Phone.init(
    {
      model: { type: DataTypes.STRING, allowNull: false },
      brand: { type: DataTypes.STRING, allowNull: false },
      dateManufacture: { type: DataTypes.DATEONLY, allowNull: false },
      RAMsize: {
        type: DataTypes.INTEGER,
        validate: { min: 512 },
        field: 'RAMsize',
      },
      cpu: DataTypes.STRING,
      screenDiagonal: DataTypes.SMALLINT,
      isNfs: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Phone',
      underscored: true,
    }
  );
  return Phone;
};
