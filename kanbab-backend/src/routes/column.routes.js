const {Router} = require('express');
columnRoutes = Router();

columnRoutes.post('/add');
columnRoutes.put('/edit');
columnRoutes.delete('/remove');


module.exports = columnRoutes;