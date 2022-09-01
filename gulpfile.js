    var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var minCSS = require('gulp-clean-css');
var minJS = require('gulp-minify');
var clean = require('gulp-clean');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        // server: {
        //     baseDir: "./"
        // }
        proxy: "fgt.site/app"
    });

    gulp.watch("app/sass/**/*.scss", ['sass']);
    gulp.watch("app/**/*.php").on('change', browserSync.reload);
    gulp.watch("app/**/*.html").on('change', browserSync.reload);
    gulp.watch("app/js/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/**/*.scss")
        .pipe(sass())
        .pipe(minCSS())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('imagemin', function() {
    return gulp.src('app/img/**/*.*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img/'));
});

gulp.task('minJS', function() {
    gulp.src('./app/js/**/*.js')
        .pipe(minJS({
            ext: {
                src: '-debug.js',
                min: '.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./build/js/'))

});

gulp.task('clean', function() {
    return gulp.src('./build')
        .pipe(clean({ force: true }));
});

//Create build version
gulp.task('build', ['minJS', 'imagemin'], function() {
    gulp.src('./app/**/*.php')
        .pipe(gulp.dest('./build/'));

    gulp.src('./app/css/**/*.css')
        .pipe(gulp.dest('./build/css/'));

    gulp.src('./build/js/*-debug.js')
        .pipe(clean({ force: true }));

});

gulp.task('default', ['serve']);