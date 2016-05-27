const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');

gulp.task('sass', () => {
  return gulp.src('views/**/*.scss').
    pipe(sass({sourceComments: 'map'})).
    pipe(concat('all.css')).
    pipe(gulp.dest('www/css'));

});

gulp.task('jade', () => {
  return gulp.src('views/**/*.jade')
    .pipe(jade())
      .pipe(gulp.dest('www/html'));
});

gulp.task('js', () => {
  return gulp.src('views/**/*.js')
    .pipe(uglify({mangle: false}))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('www/js/'))
});

gulp.task('watch', () => {
   gulp.watch('views/**/*.scss',['sass']);
   gulp.watch('views/**/*.jade',['jade']);
   gulp.watch('views/**/*.js',['js']);
});

gulp.task('default', ['sass','watch', 'jade' , 'js']);
