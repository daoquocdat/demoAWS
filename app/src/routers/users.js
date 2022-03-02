const express = require('express');
const router = express.Router()
const usersController = require('../controlllers/UsersController');
const {requireAuth} = require('../middlewares/authenticate');

router.get('/', usersController.index);
router.post('/register', usersController.register);
router.post('/login', requireAuth, usersController.login);
router.get('/logout', requireAuth, usersController.logout);

module.exports = router;
