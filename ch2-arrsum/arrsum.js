function sumArray(array) {
    return array.map((x) => typeof x === "number" ? x : 0).reduce((a, b) => a + b, 0);
}

function diffArray(array1, array2) {
    return sumArray(array1) - sumArray(array2);
}


testArrays = [
    [[1, 2, 3], [1, 2, 3]],
    [[41234, 6.1234, -4232], [94.1, 134.33, -1234, 543, 3412341235]],
    [["asdf", "jfklre", 132, -929, {a: 1, b: 2, c: "fdsa"}], ["lkasjdf", "riwog"]],
]


testArrays.forEach((test) => {
	console.log(`diffArray([${test[0]}], [${test[1]}]) => ${diffArray(test[0], test[1])}\n`);
});
