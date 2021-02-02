const fibonacci = function(a) {
    if(a <= 1){
        return a;
    } else{
       return a = fibonacci(a-2) + fibonacci(a-1);
    }
}

module.exports = fibonacci
