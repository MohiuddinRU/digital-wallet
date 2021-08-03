/** @format */
const multer = require('@koa/multer');
const upload = multer();
const koaCompose = require('koa-compose');

const Router = require('koa-router');
const userController = require('./controllers/user');
const walletController = require('./controllers/wallet');

const routers = new Router();
const authenticate = require('./middlewares/authenticate');

routers.post('/users', userController.register);
routers.put('/users', koaCompose([authenticate, upload.single('images')]), userController.createUser);  // add user details

routers.post('/login', userController.login);

routers.post('/wallet', authenticate, walletController.createWallet);
routers.get('/wallet', authenticate, walletController.getWallet);

module.exports = routers;
