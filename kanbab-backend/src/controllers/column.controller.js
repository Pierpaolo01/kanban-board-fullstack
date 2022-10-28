const db = require('../models/index.js');
const board = require('../models/board.js');
const user = require('../models/user.js');
const column = require('../models/column.js');


const columnModel = column(db.sequelize, db.Sequelize.DataTypes);
const boardModel = board(db.sequelize, db.Sequelize.DataTypes);
const userModel = user(db.sequelize, db.Sequelize.DataTypes);

columnModel.associate({Board: boardModel});
boardModel.associate({User: userModel, Column: columnModel});

const deleteColumn = async (req, res) => {
    try {
        const column = await columnModel.findOne({
            where: {
                id: req.params.columnId,
                boardId: req.params.boardId
            }
        });


        if(!column) {
            res.status(404).json({data: 'No column found'});
            return;
        }

        await column.destroy();

        res.status(204).json();
    } catch (e) {
        console.log(e)
    }
}

const addColumn = async (req, res) => {
    try {
        const board = await boardModel.findOne({
            where: {
                id: req.params.boardId
            }
        });

        if (!board) {
            res.status(404).json({data: 'no board found'});
            return;
        }

        board.createColumn({
            name: req.body.name,
        });

        res.status(201).json();

    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    deleteColumn,
    addColumn
}
