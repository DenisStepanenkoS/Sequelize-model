const { Router } = require('express');
const phonesRouter = require('./phonesRouter');
const customersRouter = require('./customersRouter');
const router = Router();

router.use('/phones', phonesRouter);
router.use('/customer', customersRouter);
module.exports = router;
