let second_file = "./output.txt";
let result_output_file = ""

const minimist = require('minimist')

module.exports.pars_output = function () {
    const arg_o = minimist(process.argv.slice(2), {
        string: ['size'],
        alias: {'output': 'o'},
        default: {'output': false},
         })
         if (arg_o.o == second_file){
            /* console.log("путь до выходного файла указан верно") */
            result_output_file = second_file 
      
        } else {
            console.log("The path to output file isn't right")
         
      }
  return result_output_file
}