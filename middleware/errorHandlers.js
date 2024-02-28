module.exports.errorHendler = (err, req, res, next) => {
  if (res.HeaderSent) return;

  const status = err.status || 500;
  const message = err.message || 'Server Error';
  res.status(status).send(message);
};
