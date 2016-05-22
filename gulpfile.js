const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('views/**/*.scss').
    pipe(sass({sourceComments: 'map'})).
    pipe(gulp.dest('www/css'));

});

gulp.task('watch', () => {
   gulp.watch('views/**/*.scss',['sass']);
});

gulp.task('default', ['sass','watch']);
