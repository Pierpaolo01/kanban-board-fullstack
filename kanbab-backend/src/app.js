const express = require('express');
const routes = require('./routes/index.routes.js')

app = express();
app.use(express.json());

app.use('/api', routes);


app.listen(3000);