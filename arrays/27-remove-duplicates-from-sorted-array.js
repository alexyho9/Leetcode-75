/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++;
        }
    }
    for (let j = k; j < nums.length; j++) {
        nums[j] = '_';
    }
    console.log(k, nums);
    return k;
};


let nums1 = [3,2,2,3];
let val1 = 3;
// Expected output 2, nums = [2,2,_,_]
let nums2 = [0,1,2,2,3,0,4,2];
let val2 = 2;
// Expected output 5, nums = [0,1,4,0,3,_,_,_]


removeElement(nums1, val1);
removeElement(nums2, val2);