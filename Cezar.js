console.log("Module work");

let currentDate = new Date();
module.exports.date = currentDate;

module.exports.outTextfromCezar = function(value){
    return "Good morning" + value;
}