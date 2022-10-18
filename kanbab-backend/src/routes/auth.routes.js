const {Router} = require('express');
const {signUp} = require('../controllers/auth.controller.js');

authRoutes = Router();


authRoutes.post('/sign-up', signUp);

module.exports = authRoutes;