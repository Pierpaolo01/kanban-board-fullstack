const {Router} = require('express');

const { deleteColumn, addColumn } = require("../controllers/column.controller.js");
const { createTask } = require("../controllers/task.controller.js");

const {isAuthenticated} = require("../middleware/auth.middleware");


columnRoutes = Router();

columnRoutes.delete('/:boardId/columns/:columnId', isAuthenticated, deleteColumn);
columnRoutes.post('/:boardId/columns', isAuthenticated, addColumn);

module.exports = columnRoutes;
