const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');


const requireAuth = (req, res, next) =>{
    const token = req.cookies.jwt
    if(token){
        jwt.verify(token, 'this is secret key', (err, decodedToken)=>{
            if (err){
                console.log(err);
            }else{
                next();
            }
        })
    }
    else{
        res.json("redirect login!");
    }
}

module.exports = { requireAuth };