const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', () => {
  return gulp
    .src('scss/*.scss')
    .pipe(
      sass({ includePaths: ['node_modules'], outputStyle: 'compressed', errLogToConsole: true }).on(
        'error',
        sass.logError,
      ),
    )
    .pipe(
      sass({
        includePaths: ['node_modules'],
        outputStyle: 'compressed',
        errLogToConsole: true,
      }).on('error', sass.logError),
    )
    .pipe(
      autoprefixer(),
    )
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', () => {
  gulp.watch('scss/**/*.scss', gulp.series('scss'));

  browserSync.init({
    server: './',
    port: 4444,
  });
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('build', gulp.series('scss'));

gulp.task('default', gulp.series('serve'));