const { Router } = require('express');
const authRoutes = require('./auth.routes.js');
const boardRoutes = require('./board.routes.js');

router = Router();

router.use('/', authRoutes);
router.use('/board', boardRoutes);

module.exports = router;
