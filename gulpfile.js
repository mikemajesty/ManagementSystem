const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('server/sass/main.scss').
    pipe(sass({sourceComments: 'map'})).
    pipe(gulp.dest('www/css'));

});

gulp.task('watch', () => {
   gulp.watch('server/sass/main.scss',['sass']);
});

gulp.task('default', ['sass','watch']);
