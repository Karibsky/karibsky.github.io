const gulp = require('gulp'),
browserSync = require('browser-sync').create(),
sass = require('gulp-sass');


gulp.task('watch', ['sass'], function() {

	browserSync.init({
		server: '.'
	});

	gulp.watch('./scss/**/*.scss', ['sass'], browserSync.reload);
	gulp.watch('./*.html').on('change', browserSync.reload);
	gulp.watch('./js/**/*.js', browserSync.reload);

});

gulp.task('sass', function() {
	return gulp.src('./scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.stream());
});


gulp.task('default', ['watch']);