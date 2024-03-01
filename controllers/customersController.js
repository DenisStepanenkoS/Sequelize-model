const createError = require('http-errors');
const { Phone, Customer } = require('../models');

module.exports.getCustomerOrders = async (req, res, next) => {
  const { id } = req.params;

  try {
    const CustomerInst = await Customer.findByPk(id);
    const data = await CustomerInst.getPhones({ raw: true });

    res.send({ data });
  } catch (error) {
    next(error);
  }
};
