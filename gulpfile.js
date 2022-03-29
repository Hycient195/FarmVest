const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildStyles = () =>{
  return src(['sass/**/*.scss', 'pages/**/*.scss'])
  .pipe(sass())
  .pipe(dest('styles'))
}

const watchStyles = () =>{
  watch(['sass/**/*.scss', '*.html', 'pages/**/*.scss', "components/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchStyles);