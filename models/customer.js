'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsToMany(models.Phone, {through:'Order', foreignKey:'customerId'});
    }
  }
  Customer.init({
    firstname: {type: DataTypes.STRING, validate:{is:/^[A-Z][a-z]{1,63}$/}},
    lastname: {type: DataTypes.STRING, validate:{is:/^[A-Z][a-z]{1,63}$/}}
  }, {
    sequelize,
    modelName: 'Customer',
    underscored: true,
  });
  return Customer;
};