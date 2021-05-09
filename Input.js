let first_file = './input.txt';
let result_input_file = ""

const minimist = require('minimist')

module.exports.pars_input = function () {
    const arg_i = minimist(process.argv.slice(2), {
        string: ['size'],
        alias: {'input': 'i'},
        default: {'input': false},
         })
         if (arg_i.i == first_file){
            /* console.log("путь до входного файла указан верно") */
            result_input_file = first_file 
      
        } else {
            console.log("The path to input file isn't right ")
           /*  action = 0  */
          }
  return result_input_file
}