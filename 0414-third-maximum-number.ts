function arrayPairSum(nums: number[]):number {
    nums.sort((a, b) => a - b);
    let sum = 0;

    for(let i = 0 ; i < nums.length; i += 2) {
        sum += nums[i]
    }
    

    return sum;
}

console.log(arrayPairSum([ 1, 2, 2, 5, 6, 6 ]))