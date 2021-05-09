let fs = require('fs')
module.exports.write = function ( path_write, text ) {
    

fs.appendFile(path_write, text , function (err) {
  if (err) {
    //
  } else {
    console.log("Process is completed")
   
  }
})


    
    
  return 
}

