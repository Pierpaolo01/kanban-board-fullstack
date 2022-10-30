const {Router} = require('express');
const {isAuthenticated} = require("../middleware/auth.middleware");
const {moveTask, updateTask, createTask, updateSubtasks} = require("../controllers/task.controller");

const taskRoutes = Router();

taskRoutes.post('/:boardId/tasks', isAuthenticated, createTask);
taskRoutes.post('/:boardId/tasks/:taskId', isAuthenticated, moveTask);
taskRoutes.put('/:boardId/tasks/:taskId', isAuthenticated, updateTask);
taskRoutes.put('/tasks/:taskId', isAuthenticated, updateSubtasks);

module.exports = taskRoutes;
