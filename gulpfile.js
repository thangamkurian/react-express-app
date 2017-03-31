var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browerSync = require('browser-sync');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})

gulp.task('serve', ['live-server'], function(){
    browerSync.init(null, {
        proxy: "http://localhost:5000",
        port:9000
    });
})
