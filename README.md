# react-express-app

Initial Project setup
-------------------------------------------------------------------
-Adding folders, app and server for client and server resp.
-creating index.ejs and main.js files

#installing bower globally
npm install bower -g

#Gulp
-----
#installing gulp globally and gulp and gulp-live-server locally
npm install gulp -g
npm install --save gulp gulp-live-server

#initilize bower and save with default options
bower init

#including ejs
npm install --save ejs

-print helllo-world in index.ejs file and run appllication on port.

---------------------------------------------------------------------

live-server
-----------
var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browerSync = require('browser-sync');

gulp.task('live-server', function(){
    var server = new LiveServer('server/main.js');
    server.start();
})


gulp Serve
----------
npm install --save browser-sync

gulp.task('serve', ['live-server'], function(){
    browerSync.init(null, {
        proxy: "http://localhost:5000",
        port:9000
    });
})

Test





