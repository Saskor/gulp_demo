var gulp        = require('gulp');
var sass        = require('gulp-sass');
var minifyCss   = require('gulp-minify-css');
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglifyjs');
var cssnano     = require('gulp-cssnano');
var rename      = require('gulp-rename');
var del         = require('del');
var pngQuant    = require('imagemin-pngquant');
var imageMin    = require('gulp-imagemin');
var cache       = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  return gulp.src('app/sass/**/*.sass')
  	.pipe(sass())
  	.pipe(gulp.dest('app/styles'))
  	.pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs',['sass'], function(){
  return gulp.src('app/styles/libs.css')
  	.pipe(rename({
            suffix: '.min'
        }))
  	.pipe(gulp.dest('app/styles'));
});

gulp.task('scripts', function(){
	return gulp.src(['app/libs/jquery/dist/jquery.min.js'])
		.pipe(concat('libs.min.js'))
		.pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false,
	});
});

gulp.task('cleanDist', function(){
	return del.sync('dist')
});

gulp.task('clear', function(){
	return cache.clearAll('dist')
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*')
	.pipe(cache(imageMin({
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngQuant()]
		})))
	.pipe(gulp.dest('dist/img'))
});



gulp.task('watch', ['browser-sync', 'css-libs', 'scripts'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html****', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['cleanDist', 'img', 'sass', 'scripts'], function(){
	var buidCss = gulp.src([
		'app/styles/*.css'
	])
	.pipe(gulp.dest('dist/styles'))

	var buidFonts = gulp.src([
		'app/fonts/**/*',
	])
	.pipe(gulp.dest('dist/fonts'))

	var buidJs = gulp.src([
		'app/js/**/*',
	])
	.pipe(gulp.dest('dist/js'))

	var buidHTML = gulp.src([
		'app//*.html',
	])
	.pipe(gulp.dest('dist'))


});