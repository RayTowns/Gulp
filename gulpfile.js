const gulp = require ('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function tarefasCSS(cb) {
    return gulp.src('./vendor/**/*.css')
    .pipe(concat('libs.css'))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./dest/css'))
}

function tarefasJS() {
    return gulp.src('./vendor/**/*.js')
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min'}))
    .pipe(gulp.dest('./dest/js'))
}

function tarefasImagem() {
    return gulp.src('./src/imagens/*')
    .pipe(imagemin([
        imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 5}),
        imagemin.svgo({
            plugins: [
                {removeViewBox: true},
                {cleanupIDs: false}
            ]
        })
    ]))
    .pipe(gulp.dest('./dest/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
