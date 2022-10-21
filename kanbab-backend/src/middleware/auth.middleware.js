const jwt = require('jsonwebtoken');

const isAuthenticated = (req, res, next) => {
    const jwtToken = req.get('Authorization') ? req.get('Authorization').split(' ')[1] : null;
    let decodedToken;
    
    try {
        decodedToken = jwt.verify(jwtToken, 'super-secret');
    } catch (e) {
        res.status(401).json({data: 'invalid token'});
        return;
    }
    
    req.userId = decodedToken.userId;
    next();
}

module.exports = {
    isAuthenticated
}
