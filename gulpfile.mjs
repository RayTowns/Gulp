import gulp from 'gulp';
const { series, parallel, src, dest, task } = gulp;
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';

gulp.task("tarefasCSS", function() {

   return gulp.src([
        './src/vendor/jquery-ui/jquery-ui.css',
        './src/vendor/bootstrap/css/bootstrap.css',
        './src/vendor/Fontawesome/css/all.css',
        './src/vendor/owlcarousel/docs/assets/owlcarousel/assets/owl.carousel.css',
        './src/vendor/owlcarousel/docs/assets/owlcarousel/assets/owl.theme.default.css',
        './src/vendor/style.css',
        ])
        .pipe(concat('styles.css'))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task("tarefasJS", function() {

    return gulp.src([
        './jquery-3.6.0.js',
        './src/vendor/jquery-ui/jquery-ui.js',
        './src/vendor/bootstrap/js/bootstrap.js',
        './src/vendor/Fontawesome/js/all.js',
        './src/vendor/owlcarousel/docs/assets/owlcarousel/owl.carousel.js',
        './src/vendor/customized.js',
    ])
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))
});

gulp.task("tarefasImagem", function() {

    let src = '/src/imagens/*';
    let dest = '/dist/images';

    return gulp.src(src)
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
        .pipe(gulp.dest(dest))
});