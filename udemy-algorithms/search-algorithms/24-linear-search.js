function linearSearch(array, num){
    // iterate through array
    for (let i in array) {
        let item = array[i];
    // if item in array is equal to num, return true
        if (item === num) return parseInt(i);
    }
    // at end of array, if no match, return false
    return -1;
}