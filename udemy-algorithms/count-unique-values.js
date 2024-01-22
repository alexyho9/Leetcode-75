function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let counter = 0;
    let i = 0;
    let map = {};
    while (i < arr.length) {
        let number = arr[i];
        if (!map.hasOwnProperty(number)) {
            map[number] = 1;
            counter++;
        } else {
            map[number]++;
        }
        i++;
    }
    return counter;
}


console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));


const countUnique2 = arr => {
    let i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}

console.log(countUnique2([1,2,3,4,4,4,7,7,12,12,13]));