let fs = require('fs')
const prompt = require('prompt-sync')();
module.exports.read = function (path) {
  let text_readed = ""


  if (fs.existsSync('./input.txt')) {
     
    let read = fs.readFileSync(path, 'utf8')
    text_readed = read

  } else {
    const text = prompt("Input file isn't exist. Pleas, input your text > ");
    text_readed = text


  }

  return text_readed
}



 




