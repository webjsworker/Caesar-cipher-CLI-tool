

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

let fs = require('fs')
const cesar = require("./Encrypt");
const answer = require("./Decrypt")

let read = fs.readFileSync('input.txt', 'utf8') // читаем текст для шифрофки из файла синхронно.


let encrupt_message = cesar.encrypt(read)   // отправляем текст на кодировку в модуль кодировки 
let decrypt_message = answer.Dencrypt(read)   // отправляем текст на декодировку в модуль кодировки

console.log(encrupt_message )
console.log(decrypt_message )

let message = encrupt_message
/* let message = decrypt_message */


let writeableStream = fs.createWriteStream("code.txt");
writeableStream.write(  message);
writeableStream.end("\n");

/* let messages = decrypt_message
fs.writeFileSync('code.txt',  messages ) */
 



/* if (arg1 != "-a"  ){
    console.log("Error... uncorrect argument");
} */

/* console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath); */
/* 
console.log("action: " + arg1);
console.log("value: " + arg2);
console.log("shift: " + arg3);
console.log("value: " + arg4);
console.log("input: " + arg5);
console.log("path: " + arg6);
console.log("output: " + arg7);
console.log("path: " + arg8); */

//console.log(String.fromCharCode(65, 66, 67))
/* let c = 'ABC g';
console.log(c.charCodeAt(4))
console.log(c.length) */

//String.fromCharCode(65, 66, 67);

 
