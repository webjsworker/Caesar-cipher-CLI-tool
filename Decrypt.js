/* module.exports.Dencrypt = function(value,shift){
    var result = "";
    for (var i = 0; i <= value.length; i++) {
        var symbol = value[i];
        namber = value.charCodeAt(i) 
        result += String.fromCharCode(namber - shift )
      }
    return   result;
} */




module.exports.Dencrypt = function (value, shift) {
    var result = "";
    let mod = Math.abs(shift)

    for (var i = 0; i <= value.length; i++) {

        namber = value.charCodeAt(i)

        if (namber >= 65 && namber <= 90) {
            for (var n = 1; n <= mod; n++) {
                if (shift > 0) { namber++ }
                if (shift < 0) { namber-- }
                if (namber > 90) { namber = 65 }
                if (namber < 65) { namber = 90 }
            }
            result += String.fromCharCode(namber)
        } else if (namber >= 97 && namber <= 122) {
            for (var n = 1; n <= mod; n++) {
                if (shift > 0) { namber++ }
                if (shift < 0) { namber-- }
                if (namber > 122) { namber = 97 }
                if (namber < 97) { namber = 122 }
            }
            result += String.fromCharCode(namber)
        } else result += String.fromCharCode(namber)



    }
    return result;
}
