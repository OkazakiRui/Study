const gulp = require("gulp"),
  express = require("express"),
  mysql = require("mysql"),
  rename = require("gulp-rename"),
  ejs = require("gulp-ejs");

gulp.task("default", function () {
  return gulp.watch("views/*.ejs", function () {
    // style.scssの更新があった場合の処理

    // style.scssファイルを取得
    return gulp
      .src("views/index.ejs")
      .pipe(ejs())
      .pipe(rename({ extname: ".html" }))
      .pipe(gulp.dest("dist"));
    // .src("css/style.scss")
    // // Sassのコンパイルを実行
    // .pipe(
    //     sass({
    //     outputStyle: "expanded"
    //     })
    //     // Sassのコンパイルエラーを表示
    //     // (これがないと自動的に止まってしまう)
    //     .on("error", sass.logError)
    // )
    // // cssフォルダー以下に保存
    // .pipe(gulp.dest("css"))
  });
  //   return (
  //     gulp
  //   .src("views/index.ejs")
  //   .pipe(ejs())
  //   .pipe(rename({ extname: '.html' }))
  //   .pipe(gulp.dest('dist'))
  //   );
});
