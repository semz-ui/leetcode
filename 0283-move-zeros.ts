function moveZeroes(nums: number[]):void {
    let insertPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[insertPos], nums[i]] = [nums[i], nums[insertPos]];
             console.log(nums[insertPos], nums[i])
            insertPos++;
        }
    }

    // return nums;
}


console.log(moveZeroes([1,3,12,0,0,0]))