const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function tarefasCSS(cb) {
    
   return gulp.src([
        './vendor/bootstrap-5.2.0-dist/css/bootstrap.css',
        './vendor/Fontawesome/css/all.css',
        './vendor/jquery-ui/jquery-ui.css',
        './vendor/owlcarousel/docs/assets/owlcarousel/assets/owl.carousel.css',
        './vendor/owlcarousel/docs/assets/owlcarousel/assets/owl.theme.default.css',
        './src/style.css'
   ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
}

function tarefasJS(){

    return gulp.src(['./jquery-3.6.0.js',
        './vendor/Fontawesome/js/all.js',
        './vendor/bootstrap-5.2.0-dist/js/bootstrap.js',
        './vendor/owlcarousel/docs/assets/owlcarousel/owl.carousel.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/customized.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
}

function tarefasImagem(){

    return gulp.src('./src/imagens/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/images'))
}

  exports.styles = tarefasCSS
  exports.scripts = tarefasJS
  exports.images = tarefasImagem