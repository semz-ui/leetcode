

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    const merge_nums = [...nums1, ...nums2].sort((a,b) => a - b)
    const middle = Math.floor(merge_nums.length / 2)
    const isEven = merge_nums.length % 2 === 0
    if(isEven) {
        return (merge_nums[middle] + merge_nums[middle - 1]) / 2
    } else {
        return merge_nums[middle]
    }
};

const nums1 = [1,3]
const nums2 = [2]

const ans = findMedianSortedArrays(nums1,nums2)
console.log(ans)