
// принимает текст  и шаг сдвига




/* console.log("Module work"); */

/* let currentDate = new Date();
module.exports.date = currentDate;

module.exports.outTextfromCezar = function(value){
    return "Good morning" + value;
} */

module.exports.encrypt = function(value,shift){
    var result = "";
    for (var i = 0; i <= value.length; i++) {
        var symbol = value[i];
        namber = value.charCodeAt(i) 
        
        result += String.fromCharCode(namber + shift )
      }
    return   result;
}