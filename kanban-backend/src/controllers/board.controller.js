const board = require('../models/board.js');
const user = require('../models/user.js');
const column = require('../models/column.js');
const db = require('../models/index.js');
const task = require("../models/task");

const userModel = user(db.sequelize, db.Sequelize.DataTypes);
const boardModel = board(db.sequelize, db.Sequelize.DataTypes);
const columnModel = column(db.sequelize, db.Sequelize.DataTypes);
const taskModel = task(db.sequelize, db.Sequelize.DataTypes);


userModel.associate({Board: boardModel});
boardModel.associate({User: userModel, Column: columnModel});
taskModel.associate({Column: columnModel})
columnModel.associate({Board: boardModel, Task: taskModel});


const createBoard = async (req, res) => {
    const {userId} = req;

    const user = await userModel.findOne({where: {id: userId}});

    const board = await user.createBoard({
        name: req.body.name,
    });

    if (!req.body.columns.length) {
        req.body.columns = ['backlog'];
    }

    for await (const column of req.body.columns) {
        await board.createColumn({
            name: column,
        })
    };


    const createdBoard = await boardModel.findOne({where: {id: board.id}, include: {model: columnModel}});

    res.status(201).json({data: createdBoard})
}

const getAllBoards = async (req, res) => {
    const boards = await boardModel.findAll({where: {UserId: req.userId}, include: {model: columnModel}});

    res.status(200).json({data: boards});
}

const getBoard = async (req, res) => {
    const board = await boardModel.findOne({
        where: {
            id: req.params.boardId,
            userId: req.userId
        },
        include: {
            model: columnModel,
            include: {model: taskModel}
        }
    });

    if (!board) {
        res.status(404).json({data: 'Board not found'});
        return;
    }

    res.status(200).json({data: board});
}

const updateBoard = async (req, res) => {
    const {userId} = req;
    const {boardId} = req.params;

    const board = await boardModel.findOne({where: { id: boardId }, include: {model: columnModel}});

    if(!board) {
        res.status(404).json({data: 'Board does not exist'});
        return;
    }

    if (board.UserId !== userId) {
        res.status(403).json({data: 'You cannot touch this'});
        return;
    }

    await board.update({
        name: req.body.name
    });

    for await (const column of req.body.Columns) {

        if (column.BoardId !== board.id) {
            res.status(403).json({data: 'Column does not belong to board'});
            return;
        }

        await columnModel.update({
            name: column.name
        },
        {
            where: {BoardId: board.id, id: column.id}
        });
    }

    await board.save();
    await board.reload();

    res.status(200).json({data: board});
}

const deleteBoard = async (req, res) => {

    const board = await boardModel.findOne({
        where: {
            id: req.params.boardId,
            userId: req.userId,
        }
    });

    if (!board) {
        res.status(404).json({data: 'Board not found'});
        return;
    }

    await board.destroy();

    res.status(204);
}

module.exports = {
    createBoard,
    updateBoard,
    getAllBoards,
    getBoard,
    deleteBoard
}
