const UserModel = require('../models/usersModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')


class usersController {
    index(req, res){
        const user = UserModel.find()
        .then((user) => {
            res.json(user);
        })
        .catch(err => {
            res.json(err);
        })
    }
    async register(req, res){
        const username = req.body.username;
        let password = req.body.password;
        const name = req.body.name;
        if(username && password && name){
            const salt = await bcrypt.genSalt(5);
            password = await bcrypt.hash(password, salt);
            const user = new UserModel({
                username: username,
                password: password,
                name: name,
            })
            .save()
            .then(async (user) => {
                const token = await jwt.sign({
                    id: user.id
                  },
                  'this is secret key', 
                  { expiresIn: 60 * 60 * 60 * 24 }
                );
                console.log("register user successfully!");
                res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 60 * 24 * 1000});
                res.json("register successfully!");
            })
            .catch(err => {
                console.log("register user failed!");
                res.json(err);
            })
        }
        else{
            console.log("register user failed!");
            res.json("Please fill out username, password, name!");
        }
    }
    login(req, res){
        const username = req.body.username;
        const password = req.body.password;

        const check = UserModel.findOne({username: username})
        .then(async check => { 
            if(check == null){
                console.log("Incorrect email!");
                res.json("Incorrect email!");
            }
            else{
                const auth = await bcrypt.compare(password, check.password);
                if(auth){
                    const token = await jwt.sign({
                            id: check.id
                        },
                        'this is secret key', 
                    );
                    res.cookie('jwt', token, { httpOnly: true, maxAge: 60 * 60 * 60 * 24 * 1000});
                    res.json("Login");
                }
                else if(!auth){
                    console.log("Incorrect password!");
                    res.json("Incorrect password!");
                }
            }
        })
        .catch(err => {
            console.log("Incorrect email or password", err);
            res.json("Incorrect email or password", err);
        })
    }
    logout(req, res){
        res.cookie('jwt', '', { httpOnly: true, maxAge: 1});
        console.log("Logout");
        res.json("Logout");
    }
}

module.exports = new usersController;