
const bubbleSort = array => {
    const swap = (arr, one, two) => {
        [arr[one], arr[two]] = [arr[two], arr[one]]
    }
    // iterate over array backwards in outer loop
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j+1]) swap(array, j, j+1)
        }
    }
    return array;
}


console.log(bubbleSort([54,2,14,7,19,33,25,46,8]));