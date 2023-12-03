const express = require('express');
const adminController = require('../Controllers/adminController'); 

const adminRouter = express.Router();

adminRouter.post('/',adminController.login);

module.exports = adminRouter;