/**
 * Created by flyin on 2017/4/27.
 */
let gulp = require('gulp');
let mockServer = require('gulp-mock-server');

gulp.task('mock', function() {
  gulp.src('.')
    .pipe(mockServer({
      port: 8090
    }));
});