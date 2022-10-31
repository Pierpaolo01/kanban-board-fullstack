const db = require('../models/index.js');
const board = require('../models/board.js');
const task = require('../models/task.js');
const column = require('../models/column.js');
const user = require("../models/user");

const columnModel = column(db.sequelize, db.Sequelize.DataTypes);
const boardModel = board(db.sequelize, db.Sequelize.DataTypes);
const taskModel = task(db.sequelize, db.Sequelize.DataTypes);
const userModel = user(db.sequelize, db.Sequelize.DataTypes);

taskModel.associate({Column: columnModel})
columnModel.associate({Board: boardModel, Task: taskModel});
boardModel.associate({Column: columnModel, User: userModel});

const createTask = async (req, res)=> {
    try {
        const board = await boardModel.findOne({
            where: {
                id: req.params.boardId
            }
        });

        if (!board) {
            res.status(404).json({data: 'no board found'})
        }

        const newTask = await taskModel.create({
            title: req.body.title,
            description: req.body.description,
            subtasks: req.body.subtasks,
            ColumnId: req.body.column.id
        });

        res.status(201).json({newTask})
    } catch (e) {

    }
}

const updateTask = async (req, res) => {
    try {

        const task = await taskModel.findOne({
            where: {
                id: req.params.taskId
            }
        });

        if (!task) {
            res.status(404).json('no task found')
            return;
        }

        await task.update({
            title: req.body.title,
            description: req.body.description,
            subtasks: req.body.subtasks,
        });

        res.status(204).json({data: task})

    } catch (e) {
        console.log(e);
    }
}

const moveTask = async (req, res) => {
    try {
        const task = await taskModel.findOne({
            where: {
                id: req.params.taskId
            }
        });

        const column = await columnModel.findOne({
            where: {
                id: req.body.columnId
            }
        });

        if (!column || column.BoardId !== Number(req.params.boardId)) {
            res.status(422).json('Moved task to invalid column');
            return
        }

        await task.update({
            ColumnId: req.body.columnId
        });

        res.status(200).json({data: task});

    } catch (e) {
        console.log(e)
    }
}

const updateSubtasks = async (req, res) => {
    const task = await taskModel.findOne({
        where: {
            id: req.params.taskId
        }
    });

    await task.update({
        subtasks: req.body.subtasks
    });

    res.status(204).json({data: task});
}

module.exports = {
    createTask,
    updateTask,
    moveTask,
    updateSubtasks,
}
