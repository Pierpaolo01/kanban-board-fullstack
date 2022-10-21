const {Router} = require('express');
const {createBoard} = require('../controllers/board.controller.js');

const {isAuthenticated} = require("../middleware/auth.middleware");

const boardRoutes = Router();

boardRoutes.post('/create', isAuthenticated, createBoard)

module.exports = boardRoutes;