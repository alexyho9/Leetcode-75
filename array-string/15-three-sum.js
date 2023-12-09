`
Given an integer array nums, return all the triplets
[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.
`

var threeSum = function(nums) {
    // solution array
    let result = []
    // sort numbers
    let s = nums.sort((a, b) => {return a - b});
    console.log("New Pattern:", s);
    // brute force
    for (let i = 0; i < nums.length - 2; i++) {
        console.log("iteration:", i);
        if (i > 0 && s[i] == s[i - 1]) {
            console.log("skip");
            continue;
        }
        let left = i + 1;
        let right = s.length - 1;
        let previous_left;
        while (left < right) {
            if (result && s[left] == previous_left) {
                console.log('skip2');
                left += 1;
            }
            else if (s[i] + s[left] + s[right] == 0) {
                result.push([s[i], s[left], s[right]]);
                console.log([s[i], s[left], s[right]]);
                previous_left = s[left];
                left += 1;
            } else if (s[i] + s[left] + s[right] > 0) {
                right -= 1;
            } else if (s[i] + s[left] + s[right] < 0) {
                left += 1;
            }
        }
    }
    console.log(result);
    return result;
};


threeSum([-1,0,1,2,-1,-4]);
threeSum([0,0,0,0]);