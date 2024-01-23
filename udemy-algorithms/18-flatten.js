function flatten(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (Array.isArray(element)) {
            result = result.concat(flatten(element));
        }
        else {
            result.push(element);
        }
    }
    return result;
}

console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

