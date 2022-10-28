const {Router} = require('express');

const { deleteColumn, addColumn } = require("../controllers/column.controller.js");
const { createTask } = require("../controllers/task.controller.js");

const {isAuthenticated} = require("../middleware/auth.middleware");


columnRoutes = Router();

columnRoutes.delete('/:boardId/column/:columnId', isAuthenticated, deleteColumn);
columnRoutes.post('/:boardId/column', isAuthenticated, addColumn);

columnRoutes.post('/:boardId/column/subtask', isAuthenticated, createTask);


module.exports = columnRoutes;
