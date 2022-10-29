const { Router } = require('express');
const authRoutes = require('./auth.routes.js');
const boardRoutes = require('./board.routes.js');
const columnRoutes = require('./column.routes.js');
const taskRoutes = require('./task.routes.js');

router = Router();

router.use('/', authRoutes);
router.use('/boards', boardRoutes);
router.use('/boards', columnRoutes);
router.use('/boards', taskRoutes);

module.exports = router;

