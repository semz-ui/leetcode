function singleNumber(nums: number[]): number {

    let num_to_object: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++){
        num_to_object[nums[i]] = (num_to_object[nums[i]] || 0) + 1
    }

    for(const num in num_to_object){
        if(num_to_object[num] === 1){
            return Number(num)
        }
    }

    return 0
};

const number = [4,1,2,1,2]

console.log(singleNumber(number))