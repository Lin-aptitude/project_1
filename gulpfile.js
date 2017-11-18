//导入模块
var gulp=require('gulp');
var sass = require('gulp-sass');

var path={
    sass:'./src/sass/*.scss',
    js:'./src/js/'
}        

gulp.task('compileSass',function(){
    // 查找文件位置
    gulp.src(path.sass) //得到文件流（文件在内存中的状态）
        .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))  //编译sass文件
        .pipe(gulp.dest('./src/css/'))          //输出到硬盘
});


// 监听文件的任务
gulp.task('jtSass',function(){
    // 监听home.scsss文件
    // 如果有修改，则执行compileSass任务
    gulp.watch(path.sass,['compileSass'])
})