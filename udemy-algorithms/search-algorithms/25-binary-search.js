function binarySearch(array, target){
    let left = 0;
    let right = array.length;
    let mid = Math.floor((left + right) / 2);

    while (array[mid] !== target && left <= right) {
        console.log(left, mid, right);
        if (array[mid] > target) right = mid - 1;
        else if (array[mid] < target) left = mid + 1;
        mid = Math.floor((left + right) / 2);
    }
    if (array[mid] === target) return mid;
    return -1;
}

console.log(binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10));

console.log(binarySearch([1,2,3,4,5], 2))