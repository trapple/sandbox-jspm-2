var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
  browserSync({
    open: false,
    port: 3000,
    startPath: "/",
    server: {
      baseDir: "."
    }
  });
});

gulp.task('default', ['browserSync'], function() {
  gulp.watch(['index.html', 'lib/*'], browserSync.reload);
});
