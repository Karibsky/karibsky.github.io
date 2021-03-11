var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('js/es6/main.js')
        .pipe(browserify({ transform: ['babelify'] }))
        .pipe(rename('./js/bundle.js'))
        .pipe(gulp.dest('./'))
})