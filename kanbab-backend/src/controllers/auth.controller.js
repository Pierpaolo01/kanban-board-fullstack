const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const user = require('../models/user.js');
const db = require('../models/index.js');

const userModel = user(db.sequelize, db.Sequelize.DataTypes);

const signUp = async (req, res) => {
    const {username, password} = req.body;

    const newUser = await userModel.findOne({
        where: { username }
    });

    if (newUser) {
        res.status(403).json({
            data: { message: "User already exists" }
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
        username,
        password: hashedPassword,
    });

    const jwtToken = jwt.sign(username, 'super-secret');
    res.status(201).send({data: jwtToken});
}

module.exports = {
    signUp,
}