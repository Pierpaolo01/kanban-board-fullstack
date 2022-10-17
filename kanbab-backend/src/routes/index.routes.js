const { Router } = require('express');
const authRoutes = require('./auth.routes.js');

router = Router();

router.use(authRoutes);

module.exports = router;

