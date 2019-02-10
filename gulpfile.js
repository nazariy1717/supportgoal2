let gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    // cssmin        = require('gulp-cssmin');
    browserSync   = require('browser-sync');

gulp.task('sass', function() {
  return gulp.src('src/sass/**/*.scss')
      .pipe(sass())
      // .pipe(cssmin())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function () {
  browserSync({
    server: {
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function () {
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});
