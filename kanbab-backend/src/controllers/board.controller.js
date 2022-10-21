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

module.exports = {
    createBoard,
}
