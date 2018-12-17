var gulp = require('gulp');
// var sass = require("gulp-sass");

gulp.task('copy-html',function(){
	gulp.src("*.html")
    .pipe(gulp.dest("D:/phpStudy/WWW/wiggle"));
});

// gulp.task("sass",function(){
// 	gulp.src("sass/*.scss")
// 	.pipe(sass())
// 	.pipe(gulp.dest("D:/phpStudy/WWW/6/css1"))
// });

gulp.task("copy-img",function(){
	gulp.src("img/*.{jpg,png,gif,ico}")
	.pipe(gulp.dest("D:/phpStudy/WWW/wiggle/img"));
});
gulp.task("copy-img1",function(){
    gulp.src("img1/*.{jpg,png,gif,ico}")
    .pipe(gulp.dest("D:/phpStudy/WWW/wiggle/img1"));
});
gulp.task("copy-img2",function(){
    gulp.src("img2/*.{jpg,png,gif,ico}")
    .pipe(gulp.dest("D:/phpStudy/WWW/wiggle/img2"));
});

gulp.task("php",function(){
	gulp.src("php/*.php")
	.pipe(gulp.dest("D:/phpStudy/WWW/wiggle/php"));
});

gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("D:/phpStudy/WWW/wiggle/js"));
});

gulp.task("font",function(){
	gulp.src("font/*.{eot,svg,ttf,woff}")
	.pipe(gulp.dest("D:/phpStudy/WWW/wiggle/font"));
});

gulp.task("css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("D:/phpStudy/WWW/wiggle/css"));
});

gulp.task("watch",function(){
	gulp.watch("*.html",gulp.series("copy-html"));
	gulp.watch("img/*.{jpg,png}",gulp.series("copy-img"));
    gulp.watch("img1/*.{jpg,png}",gulp.series("copy-img1"));
    gulp.watch("img2/*.{jpg,png}",gulp.series("copy-img2"));
	gulp.watch("css/*.css",gulp.series("css"));
	gulp.watch("js/*.js",gulp.series("js"));
	gulp.watch("php/*.php",gulp.series("php"));
	gulp.watch("font/*.{eot,svg,ttf,woff}",gulp.series("font"));
	// gulp.watch("sass/*.scss",["sass"]);
});