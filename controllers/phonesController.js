const { Op } = require('sequelize');
const createError = require('http-errors');
const { Phone, Order } = require('../models/index');

module.exports.getPhoneById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundPhone = await Phone.findAll({ where: { id: id } });
    if (!foundPhone[0]) return next(createError(404, 'Phone not found'));
    res.status(200).send(foundPhone);
  } catch (error) {
    next(error);
  }
};

module.exports.deletePhone = async (req, res, next) => {
  try {
    const { id } = req.params;
    const orderDeleted = await Order.destroy({
      where: { phone_id: id },
    });

    const phoneDeleted = await Phone.destroy({
      where: { id: id },
      returning: true,
    });
    if (!phoneDeleted) return next(createError(404, 'Phone not found'));

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhone = async (req, res, next) => {
  try {
    const { body } = req;
    const { id } = req.params;
    const newPhone = await Phone.update(body, {
      where: {
        id: id,
      },
      returning: true,
    });

    if (!newPhone[0]) return next(createError(404, 'Phone not found'));

    return res.status(200).send(newPhone[1]);
  } catch (error) {
    next(error);
  }
};

module.exports.createPhone = async (req, res, next) => {
  try {
    const { body } = req;

    const newPhone = await Phone.create(body);
    if (!newPhone) return next(createError(400, 'Somethin went wrong'));

    const preparedPhone = { ...newPhone.get() };
    delete preparedPhone.updatedAt;
    delete preparedPhone.createdAt;

    res.status(201).send(preparedPhone);
  } catch (error) {
    next(error);
  }
};

module.exports.getPhones = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;

    const foundPhones = await Phone.findAll({
      limit: parseInt(limit),
      offset: limit * (page - 1),
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundPhones) next(createError(400, 'Something went wrong'));

    res.status(200).send(foundPhones);
  } catch (error) {
    next(error);
  }
};
