import gulp from 'gulp';
const { series, parallel, src, dest, task } = gulp;
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import htmlmin from 'gulp-htmlmin';
import babel from 'gulp-babel';
import browserSync, { reload } from 'browser-sync';

gulp.task("tarefasCSS", function(callback) {

    gulp.src([
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

        return callback()
});

gulp.task("tarefasJS", function(callback) {

     gulp.src([
        './jquery-3.6.0.js',
        './src/vendor/jquery-ui/jquery-ui.js',
        './src/vendor/bootstrap/js/bootstrap.js',
        './src/vendor/Fontawesome/js/all.js',
        './src/vendor/owlcarousel/docs/assets/owlcarousel/owl.carousel.js',
        './src/vendor/customized.js',
    ])

    .pipe(babel({
        comments: true,
        presets: ['@babel/env']
    }))

        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist/js'))

        return callback()
});

gulp.task("tarefasImagem", function(callback) {

    let src = '/src/imagens/*';
    let dest = '/dist/images';

     gulp.src(src)
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

        return callback()
});

gulp.task("tarefasHTML", function(callback){

     gulp.src('./src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))

    return callback()
});

gulp.task("serve", function(){
    browserSync.init({
        server:{
            baseDir: "./dist"
        }
    })

    gulp.watch("./src/**/*").on("change", gulp.task('sync'))
    gulp.watch("./src/**/*").on("change", reload)
})

gulp.task ('sync', gulp.parallel( 'tarefasHTML', 'tarefasCSS', 'tarefasJS' ))