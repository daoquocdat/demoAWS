const routerUsers = require('./users');
const routerBooks = require('./books');
function route(app){
    app.use('/', routerUsers);
    app.use('/book', routerBooks);
}

module.exports = route;