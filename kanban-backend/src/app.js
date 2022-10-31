const express = require('express');
const router = require('./routes/index.routes.js');
const helmet = require("helmet");

app = express();

app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/api', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on: ${process.env.PORT || 3000}`)
});
