const minimist = require('minimist')

let s = "-s";
let sh = "--shift"

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
      let val = 0
      if (Number.isInteger(arg_s.s) ){
        console.log("Check --shift is right")
        val = arg_s.s
        } else {
          /* console.log("шифт не число или отрицательное число")
          val = 0 */

for (var i = 0; i <= process.argv.length; i++){
  
  if(process.argv[i] == s ||process.argv[i]== sh){
    let minus_shift = process.argv[i+1]
    console.log("minus shift = " + minus_shift)
    let namber = Number( minus_shift)
    let check = Number.isInteger(namber) 
    /* console.log( namber) */
    if(check) {val = process.argv[i+1]} else {
      console.log("--shift isn't namber")
          val = 0
    }
    
    /* console.log(val) */
  }
}




        }
    
  return val
}


