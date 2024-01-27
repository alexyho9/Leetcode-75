// create empty array
// Merge function
// create two pointers, one for each array
// create condition while there are unchecked values in either array
// start at lowest value of each array and compare them to each other
// move the lower value to new array, increment pointer
// consider what happens when one of the arrays exhaust

const merge = (arr1, arr2) => {
    let result = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

// Merge Sort
// base case: array length = 0 or 1, return array
// find midpoint, split the array in two
// return the merge of mergeSort of the two halves
const mergeSort = arr => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


// console.log(merge([1,10,50], [2,14,99,100]));
console.log(mergeSort([16, 3, 8, -4, 25, 12, 9, -1]));