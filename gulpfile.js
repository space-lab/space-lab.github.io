var gulp = require('gulp')
var concat = require('gulp-concat')
var watch = require('gulp-watch')
var plumber = require('gulp-plumber')
var autoprefixer = require('gulp-autoprefixer')
var minifyCss = require('gulp-minify-css')
var uglify = require('gulp-uglify')
var series = require('stream-series')
var imagemin = require('gulp-imagemin')
var pngquant = require('imagemin-pngquant')

var destJS = 'dist/scripts'
var destCss = 'dist/styles'
var destImg = 'dist/images'

var srcCss = 'src/styles/main.css'
var srcJS = 'src/scripts/*.js'
var srcVendorJS = 'src/scripts/vendors/*.js'
var srcImg = ['src/images/*.svg','src/images/*.png','src/images/artwork/*.png']


var onError = function(err) {
  console.log("error : ", err)
  this.emit('end')
};

// concat and minify css
gulp.task('css', function() {
  return gulp.src(srcCss)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(destCss))
})

// concat and minify js
gulp.task('js', function() {
  return series(gulp.src(srcVendorJS),gulp.src(srcJS))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(destJS))
})

// img task
gulp.task('img', function() {
  return gulp.src(srcImg)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(destImg))
})

// watch files
gulp.task('watch', function() {
  gulp.watch([srcCss, 'src/styles/*.css'], ['css'])
  gulp.watch(srcJS, ['js'])
  gulp.watch(srcImg, ['img'])
})

// default task
gulp.task('default', ['watch', 'css', 'js', 'img'])
