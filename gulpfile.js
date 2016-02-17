/*var gulp         = require('gulp');
var browserSync  = require('browser-sync').create();
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifycss    = require('gulp-minify-css');
var rename       = require('gulp-rename');*/
var gulp = require("gulp"),
    browserSync = require('browser-sync');

gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);


// Static Server + watching scss/html files
/*gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./app"
	});

	gulp.watch("sass/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});*/

// Compile sass into CSS & auto-inject into browsers
/*gulp.task('sass', function() {
	return gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(rename({suffix: '.min', prefix : '_'}))
	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))
	.pipe(minifycss())
	.pipe(gulp.dest('app'))
	.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);*/