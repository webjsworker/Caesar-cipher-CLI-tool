


let encode = "encode";
let decode = "decode"
let action = ""
let shift = 0 
let first_file = './input.txt';
let second_file = "./output.txt";
let input_file = "";
let output_file = "";
/* let file = "" ; */

const minimist = require('minimist')

const arg_s = minimist(process.argv.slice(2), {
    string: ['size'],
   /*  boolean: true, */
    alias: {'shift': 's'},
    default: {'shift': false},
    /* unknown: (arg_s) => {
      console.error('Unknown option: ', arg_s)
      return false
    } */
  })
if (Number.isInteger(arg_s.s) ){
    console.log("проверка шифт успено ")
shift = arg_s.s ;
}
else {console.log("шифт не число")}


const arg_a = minimist(process.argv.slice(2), {
    string: ['size'],
    /* boolean: true, */
    alias: {'action': 'a'},
    default: {'action': false},
     })

     if (arg_a.a == false ) {
        console.log("Type of action is'n entered")
    }  
 if (arg_a.a == encode || arg_a.a == decode ){
action = arg_a.a ;
console.log("проверка action успешно")
 } else {console.log("не верный тип action")}

 const arg_i = minimist(process.argv.slice(2), {
    string: ['size'],
    alias: {'input': 'i'},
    default: {'input': false},
     })
  if (arg_i.i == first_file){
      console.log("путь до входного файла указан верно")
      input_file = first_file 

  } else {
      console.log("путь входного файла не верен")
      action = 0 
    }



  const arg_o = minimist(process.argv.slice(2), {
    string: ['size'],
    alias: {'output': 'o'},
    default: {'output': false},
     })
  if (arg_o.o == second_file){
      console.log("путь до выходного файла указан верно")
      output_file = second_file 

  } else {
      console.log("путь входного файла не верен")
  action = 0 
}
 /* const arg_i = minimist(process.argv.slice(2), {
    string: ['size'],
    boolean: true,
    alias: {'input': 'i'},
    default: {'input': false},
    /* unknown: (arg_s) => {
      console.error('Unknown option: ', arg_s)
      return false
    } */
  
/* 
if (arg_s.s == false ) {
    console.log("Shift is'n entered")
}

if (Number.isInteger(arg_s.s)){
    console.log("проверка шифт успено ")
shift = arg_s.s ;
}
else {console.log("шифт не число")}  */





/* console.log(argv.a); */
/* console.log(   "-S  равно  " + argv.s);
console.log(  " --shift равно " + argv.shift); */


let fs = require('fs')
const cesar = require("./Encrypt");
const answer = require("./Decrypt")
  // уровень сдвига кодировки 

/* 
if (argv.s != undefined){
    shift = argv.s
    console.log("сработал флаг -s" + " " + "шаг кода " + shift);
}   
if (argv.a != undefined){
    action = argv.a
    console.log("дейсвие " + action );
}
if (argv.i != undefined){
    if(argv.i == first_file){
    input_file = first_file    
    } else {
        console.log("Путь входного файле не верен")
        action = 0 
    }
       
}

if (argv.o != undefined){
    if(argv.o == second_file){
    outnput_file = second_file    
    } else {
        console.log("Путь выходного файле не верен")
        action = 0 
    }
       
} */
/* if (argv.shift != undefined){
    shift = argv.shift
    console.log("сработал флаг -shift");
}  */





if (action == encode){
    console.log("//////")
    let read = fs.readFileSync(input_file, 'utf8')
    let encrupt_message = cesar.encrypt(read,shift);
    let writeableStream = fs.createWriteStream(output_file);
    let message = encrupt_message
    writeableStream.write(  message);
    writeableStream.end("\n");
    console.log(message)
}

if (action == decode){
    console.log("-----")
    let read = fs.readFileSync(input_file, 'utf8')
    let decrypt_message = answer.Dencrypt(read,shift) 
    let writeableStream = fs.createWriteStream(output_file);
    let message = decrypt_message
    writeableStream.write( message);
    writeableStream.end("\n");
    console.log(message)
}



/* /* /* /* let read = fs.readFileSync('input.txt' , 'utf8' */ // читаем текст для шифрофки из файла синхронно. */ */ */


   // отправляем текст на кодировку в модуль кодировки 
/* let decrypt_message = answer.Dencrypt(read,shift)  */  // отправляем текст на декодировку в модуль кодировки

/* console.log(encrupt_message ) */
/* console.log(decrypt_message ) */


/* let message = decrypt_message */




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

 
