// iterate forward starting from 1
// create holding variable for current value
// iterate backwards from i using j as long as j is larger than i
// compare j and i. if j is larger, set j to j+1
// when the loop breaks (when j is no longer larger), set j + 1 to current value that was i

const insertionSort = arr => {
    for (let i = 1; i < arr.length; i++) {
        console.log(arr);
        let curr = arr[i];
        let j = i - 1;
        for (; j >= 0 && arr[j] > curr; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = curr;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4,-3]));