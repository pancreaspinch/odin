const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'
    let repeatedString = '';
    for(var i = 0; i < num; i++){
        repeatedString += string;
    }

}

module.exports = repeatString
