const requireDir = require('require-dir');


const gulpTasks = requireDir(
    './gulp',
    {
        recurse: true
    }
);
