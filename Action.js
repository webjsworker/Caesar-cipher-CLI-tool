const minimist = require('minimist')


let encode = "encode";
let decode = "decode"
let action_result = "" 


module.exports.pars_action = function () {

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
    action_result = arg_a.a ;
    /* console.log("проверка action успешно") */
     } else {console.log("type of --action is uncorrectly")}


  return action_result
}