const {Router} = require('express');
const {
    createBoard,
    updateBoard,
    getAllBoards,
    getBoard,
    deleteBoard
} = require('../controllers/board.controller.js');

const {isAuthenticated} = require("../middleware/auth.middleware");

const boardRoutes = Router();

boardRoutes.post('/create', isAuthenticated, createBoard);

boardRoutes.put('/:boardId', isAuthenticated, updateBoard);

boardRoutes.get('/:boardId', isAuthenticated, getBoard);

boardRoutes.delete('/:boardId', isAuthenticated, deleteBoard);

boardRoutes.get('/', isAuthenticated, getAllBoards);

module.exports = boardRoutes;