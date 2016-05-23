const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');

gulp.task('sass', () => {
  return gulp.src('views/**/*.scss').
    pipe(sass({sourceComments: 'map'})).
    pipe(gulp.dest('www/css'));

});

gulp.task('jade', () => {
  return gulp.src('views/**/*.jade')
    .pipe(jade())
      .pipe(gulp.dest('www/html'));
});

gulp.task('watch', () => {
   gulp.watch('views/**/*.scss',['sass']);
   gulp.watch('views/**/*.jade',['jade']);
});

gulp.task('default', ['sass','watch', 'jade']);
