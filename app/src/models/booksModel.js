const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/postgres')

const Book =  sequelize.define('book', {
    // Model attributes are defined here
    bookId:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    author:{
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    }
    }, {
    // Other model options go here
        tableName: 'book'
});

module.exports = Book;