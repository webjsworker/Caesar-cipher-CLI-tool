

let nodePath = process.argv[0];
let appPath = process.argv[1];
let arg1 = process.argv[2];
let arg2 = process.argv[3];
let arg3 = process.argv[4];
let arg4 = process.argv[5];
let arg5 = process.argv[6];
let arg6 = process.argv[7];
let arg7 = process.argv[8];
let arg8 = process.argv[9];
//console.log(String.fromCharCode(65, 66, 67))
let c = 'ABC g';
console.log(c.charCodeAt(4))
console.log(c.length)
 

//String.fromCharCode(65, 66, 67);

let fs = require('fs')
const cesar = require("./Encrypt");
let d = cesar.date;


let read = fs.readFileSync('input.txt', 'utf8') // читаем текст для шифрофки из файла синхронно.
/* console.log(read) */

let getresult = cesar.outTextfromCezar(read) ;

/* let write = fs.readFileSync('code.txt', 'utf8') */
let message = d + getresult
fs.writeFileSync('code.txt',  message )
 

//console.log("Completed")
/* if (arg1 != "-a"  ){
    console.log("Error... uncorrect argument");
} */

/* console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath); */
/* console.log();
console.log("action: " + arg1);
console.log("value: " + arg2);
console.log("shift: " + arg3);
console.log("value: " + arg4);
console.log("input: " + arg5);
console.log("path: " + arg6);
console.log("output: " + arg7);
console.log("path: " + arg8); */




console.log(d);
//const outputText = cesar.outTextfromCezar
 
//console.log(cesar.outTextfromCezar(read));