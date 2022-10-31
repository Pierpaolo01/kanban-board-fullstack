const {Router} = require('express');
const {signUp, logIn, testAuth} = require('../controllers/auth.controller.js');
const {isAuthenticated} = require('../middleware/auth.middleware.js');

authRoutes = Router();


authRoutes.post('/sign-up', signUp);
authRoutes.post('/login', logIn);
authRoutes.post('/test', isAuthenticated, testAuth);

module.exports = authRoutes
