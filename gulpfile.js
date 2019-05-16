var gulp = require('gulp');
var rename = require('gulp-rename');

defaultTask = function (cb) {
    gulp.src(['./img/**/*.jpg', './img/**/*.png', './img/**/*.jpeg'])
        .pipe(rename(function (path) {
            path.basename += "600x600";
            path.extname = ".jpg";
        }))
        .pipe(gulp.dest("./dist"));
    cb();
}

exports.default = defaultTask