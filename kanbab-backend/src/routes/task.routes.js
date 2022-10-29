const {Router} = require('express');
const {isAuthenticated} = require("../middleware/auth.middleware");
const {moveTask, updateTask, createTask} = require("../controllers/task.controller");

const taskRoutes = Router();

taskRoutes.post('/:boardId/tasks', isAuthenticated, createTask);
taskRoutes.post('/:boardId/tasks/:taskId', isAuthenticated, moveTask);
taskRoutes.put('/:boardId/tasks/:taskId', isAuthenticated, updateTask);

module.exports = taskRoutes;
