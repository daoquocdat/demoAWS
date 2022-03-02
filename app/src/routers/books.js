const express = require('express');
const router = express.Router();
const booksController = require('../controlllers/BooksController');

router.get('/', booksController.index);
router.post('/create', booksController.create);

module.exports = router;
