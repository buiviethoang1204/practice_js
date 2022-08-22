let flattend = [[1, 2], [3, 4], [5, 6]];

let newFlat = flattend.reduce((output, item) => {
    return output.concat(item);
}, [])

console.log(newFlat);