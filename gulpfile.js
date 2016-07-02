// source https://css-tricks.com/gulp-for-beginners/
//

// gulp-image-resize requires imagemagick and graphicsmagick!!!!!!



var gulp = require('gulp');

var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var imageminMozjpeg = require('imagemin-mozjpeg');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var uncss = require('gulp-uncss');
var csso = require('gulp-csso');
var criticalobj = require('critical').stream;


//todo: make gulp autoload the website for easier development


gulp.task('useref', function(){
    return gulp.src('src/*.html')
        //find and use the referenced js/css
        .pipe(useref())
        // if js -> uglify
        .pipe(gulpIf('*.js', uglify()))
        // if css -> remove unused css
        .pipe(gulpIf(['*.css'], uncss({
            html: ['src/index.html']
        })))

        // if css -> optimize css
        .pipe(gulpIf('*.css', csso()))
        // if css -> minify css
        .pipe(gulpIf('*.css', cssnano()))
        // save everything in dist folder
        .pipe(gulp.dest('dist'))
});



// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src(['dist/*.html'])
        .pipe(criticalobj({
            base: 'dist/',
            inline: true,
            css: ['dist/css/styles.min.css']}
        ))
        .pipe(gulp.dest('dist'));
});


gulp.task('images', function(){
    return gulp.src('src/img/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imageminMozjpeg({quality: 80})()))
        .pipe(gulp.dest('dist/img'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['useref', 'images'],
        'critical',
        callback
    )
});

