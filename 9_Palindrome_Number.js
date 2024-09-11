
var isPalindrome = function(x) {
    let reverseNum = 0;
    let copyNum = x;
    while(copyNum>0){
        let remainder = copyNum %10;
        
        reverseNum = reverseNum * 10 + remainder;
        copyNum = Math.floor(copyNum/10);
    }

    return x === reverseNum;
};

// console.log(isPalindrome(120));