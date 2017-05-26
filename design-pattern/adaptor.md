# 适配器

![](http://7xojpa.com1.z0.glb.clouddn.com/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/7e8f5ec673286992609b78d3729ae8f7.png)



```javascript
"use strict";

const path = require('path');

module.exports = function createFsAdapter(db) {
  const fs = {};

  fs.readFile = (filename, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else if(typeof options === 'string') {
      options = {encoding: options};
    }

    db.get(path.resolve(filename), {         //[1]
        valueEncoding: options.encoding
      },
      (err, value) => {
        if(err) {
          if(err.type === 'NotFoundError') {       //[2]
            err = new Error(`ENOENT, open "${filename}"`);
            err.code = 'ENOENT';
            err.errno = 34;
            err.path = filename;
          }
          return callback && callback(err);
        }
        callback && callback(null, value);       //[3]
      }
    );
  };

  fs.writeFile = (filename, contents, options, callback) => {
    if(typeof options === 'function') {
      callback = options;
      options = {};
    } else if(typeof options === 'string') {
      options = {encoding: options};
    }

    db.put(path.resolve(filename), contents, {
      valueEncoding: options.encoding
    }, callback);
  };

  return fs;
};
"use strict";

const fs = require('fs');

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(res);
  });
});

//try to read a missing file
fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
  console.log(err);
});
"use strict";

const levelup = require('level');
const fsAdapter = require('./fsAdapter');

const db = levelup('./fsDB', {valueEncoding: 'binary'});
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(res);
  });
});

//try to read a missing file
fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
  console.log(err);
});

```

IS THIS SO EASY   😈😈