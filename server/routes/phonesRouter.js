const { Router } = require('express');
const phonesRouter = Router();
const { phonesController } = require('../controllers');

phonesRouter
  .route('/')
  .get(phonesController.getPhones)
  .post(phonesController.createPhone);

phonesRouter
  .route('/:id')
  .patch(phonesController.updatePhone)
  .delete(phonesController.deletePhone);
  
module.exports = phonesRouter;
