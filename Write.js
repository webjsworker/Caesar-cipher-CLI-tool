let fs = require('fs')
module.exports.write = function ( path_write, text ) {
    
    let writeableStream = fs.createWriteStream(path_write);
    let message = text
    writeableStream.write(  message);
    writeableStream.end("\n");
    
    console.log("Process is completed")
  return 
}