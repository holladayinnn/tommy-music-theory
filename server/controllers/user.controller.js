'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var passport = require('passport');
var User = mongoose.model('User');

exports.getUsers = function(req, res) {
    User.find({}, function(err, users) {
      if (err) {
        return res.status(400).send({
          message: err
        });
      } else {
        res.json(_users);
      }
    });
};

exports.registerUser = function(req, res) {
  User.register(new User({ username : req.body.username }),
    req.body.password, function(err, user) {
    if (err) {
      return res.status(500).json({err: err});
    }
    if(req.body.firstname) {
      user.firstname = req.body.firstname;
    }
    if(req.body.lastname) {
      user.lastname = req.body.lastname;
    }
    user.save(function(err,user) {
      passport.authenticate('local')(req, res, function () {
        return res.status(200).json({status: 'Registration Successful!'});
      });
    });
  });
};

exports.loginUser = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
        
      var token = Verify.getToken({"username":user.username, "_id":user._id, "admin":user.admin});
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
};

exports.logoutUser = function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
};