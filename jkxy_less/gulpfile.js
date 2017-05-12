//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    notify = require('gulp-notify'),//更改提醒
    less = require('gulp-less');
 
//定义一个Lsess任务（自定义任务名称）
gulp.task('lessc', function () {
   return gulp.src('less/*.less') //该任务针对的文件;'less/jkxy_header.less'
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('css')) //将会在src/css下生成jxky_herder.css
        .pipe(notify({ message: '一个单独的less任务完成，处理了less目录下的多个less文件' }));

});
 

 
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组) 
//gulp.dest(path[, options]) 处理完后文件生成路径