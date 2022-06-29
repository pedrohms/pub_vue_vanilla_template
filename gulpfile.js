const sass = require("gulp-sass")(require("sass"))
const { src, dest } = require("gulp")
const pug = require("gulp-pug")
const fs = require("fs")

exports.compilepug = () => {
  return src("./src/**/*.pug")
    .pipe(
      pug({
        // Your options in here.
      })
    )
    .pipe(dest("./www"))
}

exports.compilesass = () => {
  return src("./src/styles/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("./www/styles"))
}

if(fs !== null){
  fs.cp("./src/vue", "./www/vue", { force: true, recursive:  true }, (result) => {
    if(result) console.log(result)
  })
  fs.cp("./src/js", "./www/js", { force: true, recursive:  true }, (result) => {
    if(result) console.log(result)
  })
}

