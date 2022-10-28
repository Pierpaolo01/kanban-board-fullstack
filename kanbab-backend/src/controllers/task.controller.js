const db = require('../models/index.js');
const board = require('../models/board.js');
const task = require('../models/task.js');
const column = require('../models/column.js');
const user = require("../models/user");
const {Json} = require("sequelize/lib/utils");

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

        const [column] = await board.getColumns();

        console.log(req.body.subtasks)
        console.log(JSON.stringify(req.body.subtasks))

        const newTask = await taskModel.create({
            title: req.body.title,
            description: req.body.description,
            subtasks: JSON.stringify(req.body.subtasks),
            ColumnId: column.id
        });

        res.status(420).json({newTask})
    } catch (e) {

    }
}

module.exports = {
    createTask
}
