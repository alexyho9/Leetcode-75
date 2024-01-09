/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target == nums[mid]) {
            return mid;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else if (target > nums[mid]) {
            left = mid + 1;
        }
    }
    return left;
};


let nums1 = [1,3,5,6];
let target1 = 5;

let nums2 = [1,3,5,6];
let target2 = 2;
let target3 = 7;

console.log(searchInsert(nums1, target1));
console.log(searchInsert(nums2, target2));
console.log(searchInsert(nums2, target3));