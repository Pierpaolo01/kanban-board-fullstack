const {Router} = require('express');

const { deleteColumn } = require("../controllers/column.controller.js");

const {isAuthenticated} = require("../middleware/auth.middleware");


columnRoutes = Router();

columnRoutes.delete('/:boardId/column/:columnId', isAuthenticated, deleteColumn);


module.exports = columnRoutes;
