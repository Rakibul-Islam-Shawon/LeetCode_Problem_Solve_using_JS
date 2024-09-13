var fib = function(n) {
    if(n<2){
        return n;
    }
    let f0 = 0;
    let f1 = 1;
    let f_next = 0;
    for(let i = 1;i<n; i++){
        f_next = f0 + f1;
        f0 = f1;
        f1 = f_next;
    }

    return f_next;
}

console.log(fib(1));
console.log(fib(7));