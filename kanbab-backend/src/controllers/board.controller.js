const board = require('../models/board.js');
const user = require('../models/user.js');
const db = require('../models/index.js');

const boardModel = board(db.sequelize, db.Sequelize.DataTypes);
const userModel = user(db.sequelize, db.Sequelize.DataTypes);

boardModel.associate({User: userModel});
userModel.associate({Board: boardModel});

const createBoard = async (req, res) => {
    const {userId} = req;

    const user = await userModel.findOne({where: {id: userId}});

    const board = await user.createBoard({
        name: req.body.name,
    });

    res.status(201).json({data: board})

}

const getAllBoards = async (req, res) => {
    console.log(req.userId)
    const boards = await boardModel.findAll({where: {UserId: req.userId}});

    res.status(200).json({data: boards});
}

const updateBoard = async (req, res) => {
    const {userId} = req;
    const {boardId} = req.params;

    const board = await boardModel.findOne({where: { id: boardId }});

    if (board.UserId !== userId) {
        res.status(403).json({data: 'You cannot touch this'});
        return;
    }

    await board.update({
        name: req.body.name
    });

    await board.save();

    res.status(200).json({data: board});
}

module.exports = {
    createBoard,
    updateBoard,
    getAllBoards,
}
