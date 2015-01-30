var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssmin = require('gulp-cssmin'),
    compass = require('gulp-compass'),
    jade = require('jade'),
    gulpJade = require('gulp-jade'),
    imageop = require('gulp-image-optimization'),
    connect = require('gulp-connect'),
    opn = require('opn'),
    livereload = require('gulp-livereload');

gulp.task('connect', function () {
    connect.server({
        root: '',
        livereload: true
    });
    opn('http://localhost:8080/');
});

gulp.task('sass', function () {
    gulp.src('src/sass/style.scss')
        .pipe(compass({
            config_file: 'config.rb',
            css: 'src/css',
            sass: 'src/sass'
        }))
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(rename('style.min.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'))
        .pipe(connect.reload());
});

gulp.task('scripts', function () {
    gulp.src([
        'src/js/jquery-1.11.1.min.js',
        'src/js/jquery.ui.widget.js',
        'src/js/jquery.iframe-transport.js',
        'src/js/jquery.fileupload.js',
        'src/js/jquery.formstyler.js',
        'src/js/socialSharing.js',
        'src/js/counterButtons.js',
        'src/js/placeGrid.js',
        'src/js/switch.js',
        'src/js/jquery-ui.min.js',
        'src/js/draggable.js',
        'src/js/plugins.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename('scripts.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(connect.reload());
});

gulp.task('jade', function () {
    return gulp.src('src/jade/**/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(gulp.dest(''))
        .pipe(connect.reload());
});

gulp.task('images', function (cb) {
    gulp.src(['src/img/**/*.png', 'src/img/**/*.jpg', 'src/img/**/*.gif', 'src/img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('dist/img')).on('end', cb).on('error', cb);
});

// Действия по умолчанию
gulp.task('default', function () {
    gulp.run('sass', 'scripts', 'jade', 'connect');
    gulp.watch(["src/sass/**/*.scss"], function (event) {
        gulp.run('sass');
    });
    gulp.watch(["src/js/*.js"], function (event) {
        gulp.run('scripts');
    });
    gulp.watch(["src/jade/**/*.jade"], function (event) {
        gulp.run('jade');
    });
});