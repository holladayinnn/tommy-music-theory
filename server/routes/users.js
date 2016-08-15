'use strict';


module.exports = function(app) {
	var path = require('path');
	var userController = require('../controllers/user.controller');
	var verify = require('./verify');

	app.route('/api/users').get(verify.verifyOrdinaryUser, verify.verifyAdmin, userController.getUsers);
	app.route('/api/users/register').post(userController.registerUser);
	app.route('/api/users/login').post(userController.loginUser);
	app.route('/api/users/logout').post(userController.logoutUser);
};