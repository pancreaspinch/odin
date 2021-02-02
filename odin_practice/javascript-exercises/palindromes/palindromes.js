const palindromes = function(str) {
    str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    return str.split('').reverse().join('') == str;
}

module.exports = palindromes
