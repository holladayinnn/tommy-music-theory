'use strict';

var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authenticate = require('../authenticate/authenticate');

function initializeModels() {
	//require('../models/_user.model');
	require('../models/user');
}

function initializeStaticallyServedDirectories(app) {
	app.use(express.static('./dist'));
	app.use(express.static('./uploads'));
}

function initailizeRoutes(app) {
	// Load in Route handlers
	//require('../routes/_user.routes')(app);
	require('../routes/users')(app);
}

module.exports = function() {
	var app = express();
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(passport.initialize());

	initializeModels();
	initializeStaticallyServedDirectories(app);
	initailizeRoutes(app);

	return app;
};
