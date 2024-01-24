const naiveStringSearch = (long, sub) => {
    let counter = 0;
    for (let i = 0; i < long.length - sub.length; i++) {
        for (let j = 0; j < sub.length; j++) {
            if (long[i + j] !== sub[j]) break;
            if (j === sub.length - 1) counter++;
        }
    }
    return counter;
}


console.log(naiveStringSearch("harold says haha in hamburg", "ha"))