const booksModel  = require('../models/booksModel')
const sequelize = require('sequelize')
class BooksController{
    async index(req, res, next){
        await booksModel.findAll({})
            .then((books) => {
                res.json(books);
            })
            .catch(next);
    }

    create(req, res){
       const name = req.body.name;
       const author = req.body.author;
       const description = req.body.description;
    
        const book = booksModel.create({
            name: name,
            author: author,
            description: description,
        })
        .then((book) => {
            console.log(book);
            res.json("create book successfully!");
        })
        .catch((err) => {
            console.log("create book failed");
        })
    }
}

module.exports = new BooksController;