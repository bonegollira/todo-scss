var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    minifycss = require('gulp-minify-css');

/**

  launch server

 */
gulp.task('server', function () {
  browserSync({
    port: 8080,
    server: {
      baseDir: "app",
      routes: {
        "/bower_components": "bower_components"
      }
    },
    browser: 'safari'
  });
});

/**

  reload server

 */
gulp.task('reload', function () {
  reload();
});

/**

  deploy

 */
gulp.task('css', function () {
  gulp.src('app/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});

/**

  watch resource file

 */
gulp.task('watch', function () {
  gulp.watch('app/index.html', ['reload']);
  gulp.watch('app/scss/*.scss', ['css', 'reload']);
  gulp.watch('app/js/*.js', ['reload']);
});

gulp.task('default', ['server', 'watch']);
