var gulp = require('gulp');

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('serve', function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    //noinspection JSUnresolvedFunction
		app = connect().use(serveStatic(__dirname));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['serve']);
