const {Router} = require('express');

const { deleteColumn, addColumn } = require("../controllers/column.controller.js");

const {isAuthenticated} = require("../middleware/auth.middleware");


columnRoutes = Router();

columnRoutes.delete('/:boardId/column/:columnId', isAuthenticated, deleteColumn);
columnRoutes.post('/:boardId/column', isAuthenticated, addColumn);


module.exports = columnRoutes;
