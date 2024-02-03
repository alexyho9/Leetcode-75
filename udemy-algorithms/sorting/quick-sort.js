// Pivot Helper function looks for pivot and then returns pivot index
function pivot(arr, start=0, end=arr.length-1) {
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
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr,left,pivotIndex-1);
        // right
        quickSort(arr,pivotIndex+1, right);
    }
    return arr;
}


console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]))    // 3