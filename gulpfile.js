const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const webpack = require('webpack-stream');
const purgecss = require('gulp-purgecss');
let cleanCSS = require('gulp-clean-css');

gulp.task('purgecss', () => {
    return gulp.src('dist/css/*.css')
        .pipe(purgecss({
            content: ['**/*.html', 'resources/scss/**/*.scss']
        }))
        .pipe(gulp.dest('dist/css'))
});


gulp.task('js', function() {
    return gulp.src('resources/js/app.js')
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'app.js'
            },
            devtool: 'source-map'
        }))
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('style', function () {
    const tailwindcss = require('tailwindcss');

    return gulp.src('resources/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss('./tailwindcss-config.js'),
            require('autoprefixer'),
        ]))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('default', () => {
    gulp.watch('resources/js/**/*.js', gulp.series('js'));
    gulp.watch('resources/scss/**/*.scss', gulp.series('style'));
});
