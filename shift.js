const minimist = require('minimist')

module.exports.pars_shift = function () {
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
        } else {console.log("шифт не число или отрицательное число")}
    
  return arg_s.s
}


