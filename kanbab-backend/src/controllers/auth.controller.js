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
            data: { message: "Username already taken" }
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
        username,
        password: hashedPassword,
    });

    const jwtToken = jwt.sign({data: username}, 'super-secret', {expiresIn: '5m'});
    res.status(201).send({data: jwtToken});
}

const logIn = async (req, res) => {
    const {username, password} = req.body;

    const user = await userModel.findOne({where: {username}});

    if (!user) {
        res.status(404).json({data: 'no user found'});
        return
    }

    if (!await bcrypt.compare(password, user.password)) {
        res.status(403).json({data: 'wrong credentials'});
        return;
    }

    const jwtToken = jwt.sign({data: username}, 'super-secret', {expiresIn: '5m'});

    res.status(200).json({data: jwtToken})
}

module.exports = {
    signUp,
    logIn
}