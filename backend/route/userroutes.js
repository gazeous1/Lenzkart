var express = require('express');

var userController = require('../src/controllers/usercontroller');

const router = express.Router();
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/:userId').get(userController.getUserControllerFn);
router.route('/user/:userId').delete(userController.deleteUserControllerFn);
router.route('/user/:userId').put(userController.updateUserControllerFn);
router.route('/users').get(userController.getAllUsersControllerFn);


module.exports = router;