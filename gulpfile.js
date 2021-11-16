const {src, dest, watch, parallel, series} = require('gulp')
const fileinclude = require('gulp-file-include')
const concat = require('gulp-concat')
const scss = require('gulp-sass')(require('sass'))
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()
const imagemin = require('gulp-imagemin')
const del = require('del')
const plumber = require('gulp-plumber')
function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}
function html() {
    return src('app/layouts/index.html')
    .pipe(fileinclude())
    .pipe(concat('index.html'))
    .pipe(dest('app/'))
    .pipe(browserSync.stream())
}
function styles() {
    return src('app/scss/style.scss')
        .pipe(plumber())
        .pipe(scss({outputStyle: 'compressed'}))
        .pipe(concat('style.min.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 10 version'],
            grid: true
}))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}
function scripts() {
    return src([
        // 'node_modules/swiper/swiper-bundle.min.js',
        'app/js/script.js'
    ])
    .pipe(plumber())
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}
function watching() {
    watch(['app/layouts/**/*.html'], html)
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/script.min.js'], scripts)
    watch("app/*.html").on('change', browserSync.reload)
}
function build() {
    return src([
        'app/*.html',
        'app/css/style.min.css',
        'app/js/script.min.js',
        'app/fonts/**/*'
    ], {base: 'app'})
    .pipe(dest('dist'))
}
function images() {
    return src('app/images/**/*')
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
    .pipe(dest('dist/images'))
}
function cleanDist() {
    return del('dist')
}
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync
exports.images = images
exports.cleanDist = cleanDist
exports.default = parallel(html, styles, scripts, watching, browsersync)
exports.build = series(cleanDist, images, build)