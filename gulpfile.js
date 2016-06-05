const gulp = require('gulp');
const sass = require('gulp-sass');
const jade = require('gulp-jade');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');

gulp.task('sass', () => {
  return gulp.src('views/**/*.scss').
    pipe(sass({sourceComments: 'map'})).
      pipe(concat('all.css'))
        .pipe(gulp.dest('www/css'))
          .pipe(browserSync.reload({stream: true}));

});

gulp.task('jade', () => {
  return gulp.src('views/**/*.jade')
    .pipe(jade())
      .pipe(browserSync.reload({stream: true}))
        .pipe(gulp.dest('www/html'));
});

gulp.task('js', () => {
  return gulp.src('views/**/*.js')
    .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(uglify({mangle: false}))
        .pipe(concat('all.js'))
          .pipe(gulp.dest('www/js/'));
});

gulp.task('browser-sync', () => {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
        files: ["views/**/*.*", "views/*.*"],
        browser: 'google-chrome',
        port: 8000,
        open: false
	});
});

gulp.task('browser-reload',['browser-sync'] ,function (){
    browserSync.reload();
});

gulp.task('watch', () => {
   gulp.watch('views/**/*.scss',['sass']);
   gulp.watch('views/**/*.jade',['jade']);
   gulp.watch('views/**/*.js',['js']);
});

gulp.task('default', ['sass', 'watch', 'jade', 'js', 'browser-reload']); // add in array 'browser-sync'
