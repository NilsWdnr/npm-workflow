const fs = require("fs");
const minifyStream = require('minify-stream')
 
fs.createReadStream('./private/script.js')
  .pipe(minifyStream())
  .pipe(fs.createWriteStream('./public/script.js'))