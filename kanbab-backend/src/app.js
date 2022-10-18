const express = require('express');
const router = require('./routes/index.routes.js');

app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-controll-Allow-Origin', '*');
    res.setHeader('Access-controll-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-controll-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', router);

app.listen(3000, () => {
    console.log('listening on: localhost:3000')
});