const { Router }= require('express');
const { customersController } = require('../controllers');

const customersRouter = Router();

customersRouter.route('/:id').get(customersController.getCustomerOrders);

module.exports = customersRouter;