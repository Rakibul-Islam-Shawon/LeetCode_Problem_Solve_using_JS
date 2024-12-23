var isAnagram = function(s, t) {

    if (s.length !== t.length) return false;
    return s.split('').sort().join('') === t.split('').sort().join('');
    // var count = 0;
    // for(let i=0;i<s.length;i++){
    //     for(let j = 0; j<s.length; j++){
    //         if(s[i]==t[j]){
    //             count++;
    //         }
    //     }
        
    // }
    // if((count) == s.length){
    //     return true;
    // }
    // else{
    //     return false
    // }
};

console.log(isAnagram("anagram","nagaram"));