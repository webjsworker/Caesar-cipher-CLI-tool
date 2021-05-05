module.exports.Dencrypt = function(value){
    var result = "";
    for (var i = 0; i <= value.length; i++) {
        var symbol = value[i];
        namber = value.charCodeAt(i) 
        result += String.fromCharCode(namber - 1 )
      }
    return   result;
}