/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] != nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    for (let j = k; j < nums.length; j++) {
        nums[j] = '_';
    }
    console.log(k, nums)
    return k;
};


let ex1 = [1,1,2];      // 2, nums = [1,2,_]
let ex2 = [0,0,1,1,1,2,2,3,3,4];    // 5, nums = [0,1,2,3,4,_,_,_,_,_]
let ex3 = [0,0,0,0,3]   // 2, nums = [0,3]

// console.log(removeDuplicates(ex1));
console.log(removeDuplicates(ex2));