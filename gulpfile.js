/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split into several files in the gulp directory
 *  because putting it all here was too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', ['clean'], function () {
  gulp.start('build');
});

gulp.task('heroku', ['clean'], function () {
	 gulp.start('build');
});

gulp.task('heroku:production', ['clean'], function(){
  console.log('herokuduction');
});

gulp.task('serveprod', function() {
  connect.server({
    port: process.env.PORT || 5000, // localhost:5000
    livereload: false
  });
});
