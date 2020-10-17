const gulp = require('gulp'); 
const {src , series , parallel , dest , watch} = require('gulp'); 
const jsPath = 'dist/js/**/*.js';
const cssPath = 'css/**/*.css';
const terser = require('gulp-terser'); 
const concat = require('gulp-concat'); 
const sourcemaps = require('gulp-sourcemaps'); 
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const deploy      = require('gulp-gh-pages');
function copyHTML(){

    return src('src/*.html').pipe(gulp.dest('dist')); 
}

function jsTask(){
    return src(jsPath)
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(dest('build/assets/js'));

}

function cssTask() {
    return src(cssPath)
      .pipe(sourcemaps.init())
      .pipe(concat('style.css'))
      .pipe(postcss([autoprefixer(), cssnano()])) 
      .pipe(sourcemaps.write('.'))
      .pipe(dest('build/assets/css'));
  }
  gulp.task('deploy', function () {
    return gulp.src("./build/**/*")
      .pipe(deploy())
  });
  
function watchTask() {
    watch([cssPath, jsPath], { interval: 1000 }, parallel(cssTask, jsTask));
  }
  

  exports.default = series(parallel(copyHTML,jsTask, cssTask),watchTask);