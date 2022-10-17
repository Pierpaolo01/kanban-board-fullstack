const express = require('express');express
const routes = require('./routes')

app = express();
app.use(express.json());

app.use('/api', routes);


app.listen(3000);