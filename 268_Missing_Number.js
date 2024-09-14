function missingNumber(nums){
    let numsLength = nums.length;
    let sumofValues = (numsLength * (numsLength + 1))/numsLength;
    let total = 0;
    for(let i = 0; i< numsLength; i++){
        total = total + nums[i];
    }

    return Math.abs(sumofValues - total);
}

console.log(missingNumber([3,0,1]));