const {Router} = require('express');
const {signUp, logIn} = require('../controllers/auth.controller.js');

authRoutes = Router();


authRoutes.post('/sign-up', signUp);
authRoutes.post('/login', logIn);

module.exports = authRoutes
