
let encode = "encode";
let decode = "decode"
let action = ""
let shift = 0 
let first_file = './input.txt';
let second_file = "./output.txt";
let input_file = "";
let output_file = "";
 
let fs = require('fs')
const cesar = require("./Encrypt");
const answer = require("./Decrypt")
const Module_shift = require("./Shift");
const Module_action = require("./Action");
const Module_input = require("./Input");
const Module_output = require("./Output");
const Module_read = require("./Read");
const Module_write = require("./Write");
const Module_prompt = require("./prompt");


/* const minimist = require('minimist') */

shift = Module_shift.pars_shift();

action = Module_action.pars_action();
input_file = Module_input.pars_input();
output_file = Module_output.pars_output();

/* console.log("shift ===" + shift) */

// switch case with tyoe of action


if (shift != 0 && action == encode && input_file ==first_file  && output_file ==  second_file ){
    let read = Module_read.read(input_file);
    let encrupt_message = cesar.encrypt(read,shift);
    let write = Module_write.write(output_file,encrupt_message);
    console.log(encrupt_message)
} 
 if(shift != 0 && action == encode && input_file !=first_file  && output_file ==  second_file) {
    let text = Module_prompt.prompt()
    let encrupt_message = cesar.encrypt( text,shift);
    let write = Module_write.write(output_file,encrupt_message);
   }
   if(shift != 0 && action == encode && input_file ==first_file  && output_file !=  second_file) {
       let read = Module_read.read(input_file);
    let encrupt_message = cesar.encrypt( read,shift);
    console.log("result encrypt - " + encrupt_message);
   }
   if(shift != 0 && action == encode && input_file !=first_file  && output_file !=  second_file) {
    let text = Module_prompt.prompt()
 let encrupt_message = cesar.encrypt(text,shift);
 console.log("result encrypt - " + encrupt_message);
}


 
if (shift != 0 && action == decode && input_file ==first_file  && output_file ==  second_file){
    let read = Module_read.read(input_file);
    let decrypt_message = answer.Dencrypt(read,shift) 
    let write = Module_write.write(output_file,decrypt_message);
    console.log(decrypt_message)
}
if(shift != 0 && action == decode && input_file !=first_file  && output_file ==  second_file) {
    let text = Module_prompt.prompt()
    let decrypt_message = answer.Dencrypt( text,shift);
    let write = Module_write.write(output_file,decrypt_message );
    
 }
 if(shift != 0 && action == decode && input_file ==first_file  && output_file !=  second_file) {
    let read = Module_read.read(input_file);
    let decrypt_message = answer.Dencrypt(  read,shift);
    console.log("result decrypt - " + decrypt_message);
    
 }
 if(shift != 0 && action == decode && input_file !=first_file  && output_file !=  second_file) {
    let text = Module_prompt.prompt()
    let decrypt_message = answer.Dencrypt( text,shift);
    console.log("result decrypt - " + decrypt_message);
    
 }

 
