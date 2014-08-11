/* jslint node: true */
"use strict";
var mocha = require('gulp-mocha');

module.exports = function(gulp) {
    gulp.task("build", function() {
        gulp.src('./Test/test.js')
            .pipe(mocha({
                reporter: 'spec'
            }));
    });
};
