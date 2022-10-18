const express = require('express');
const router = require('./routes/index.routes.js');

app = express();
app.use(express.json());

app.use('/api', router);

app.listen(3000, () => {
    console.log('listening on: localhost:3000')
});