

const twoSum = (nums: number[], target:number): number[] => {
    let result: number[] = [];

    for(let i = 0; i < nums.length; i++){
        const remainder = target - nums[i]
        if(nums.includes(remainder)){
            const remainderIndex = nums.findIndex((num: number) => num === remainder)
            if(remainderIndex !== i) {
                result = [nums[i], nums[remainderIndex]]
            }
        }
    }

    return result
}

 const nums = [2,7,11,15]
const target = 9

const answer = twoSum(nums, target)

console.log(answer)