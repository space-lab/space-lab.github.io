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


var dest = {
  js: 'dist/scripts',
  css: 'dist/styles',
  img: 'dist/images'
}

var src = {
  vendorJS: 'src/scripts/vendors/*.js',
  js: 'src/scripts/*.js',
  css: 'src/styles/main.css',
  img: ['src/images/*.svg','src/images/*.png','src/images/artwork/*.png']
}

var onError = function(err) {
  console.log("error : ", err)
  this.emit('end')
};

// concat and minify css
gulp.task('css', function() {
  return gulp.src(src.css)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(dest.css))
})

// concat and minify js
gulp.task('js', function() {
  return series(gulp.src(src.vendorJS),gulp.src(src.js))
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(uglify())
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest(dest.js))
})

// img task
gulp.task('img', function() {
  return gulp.src(src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(dest.img))
})

// watch files
gulp.task('watch', function() {
  gulp.watch([src.css, 'src/styles/*.css'], ['css'])
  gulp.watch(src.js, ['js'])
  gulp.watch(src.img, ['img'])
})

// default task
gulp.task('default', ['watch', 'css', 'js', 'img'])
