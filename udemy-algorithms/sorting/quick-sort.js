// Pivot Helper function looks for pivot and then returns pivot index
function pivot(arr, start=0, end=arr.length+1) {
    function swap(array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            swapIdx++;
            swap(arr,swapIdx,i);
        }
    }
    swap(arr,swapIdx,0);
    console.log(swapIdx)
    return swapIdx;
}


pivot([4, 2, 1, 5, 7, 6, 3])    // 3