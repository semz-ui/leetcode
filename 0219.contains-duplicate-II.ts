

function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const window = new Set();
    console.log(k, "k1")

    for (let i = 0; i < nums.length; i++) {
       
        if (window.has(nums[i])) {
            return true;
        }

        window.add(nums[i]);
         if (window.size > k) {
            window.delete(nums[i - k]);
        }

        
    }

    return false;
}

const nums = [1,2,3,4,5,2,4]
const k = 3
console.log(containsNearbyDuplicate(nums, k))

