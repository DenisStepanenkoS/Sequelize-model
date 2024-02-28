const createHttpError = require('http-errors');
const { ValidationError, BaseError } = require('sequelize');

module.exports.dbErrorHendler = (err, req, res, next) => {
  if (err instanceof ValidationError) {
    const error = err.errors.map(element => ({
      message: element.message,
      status: 422,
    }));
    return res.status(error[0].status).send(error[0].message);
  }
  if (err instanceof BaseError)
    return next(createHttpError(500, 'Database Error'));

  next(err);
};

module.exports.errorHendler = (err, req, res, next) => {
  if (res.HeaderSent) return;

  const status = err.status || 500;
  const message = err.message || 'Server Error';
  res.status(status).send(message);
};
