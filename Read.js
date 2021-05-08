let fs = require('fs')
module.exports.read = function (path) {
    
    let read = fs.readFileSync(path, 'utf8')
    
  return read
}