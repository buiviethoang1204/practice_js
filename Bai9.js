let flattend = [9, [1, 2], [3, 4], [5, 6], [4, [7, 8]]];
function newFlat(arr) {
    return arr.reduce((output, item) => {
        if (Array.isArray(item)) {
            return output.concat(newFlat(item));
        }
        return output.concat(item);
    }, [])
}
console.log(newFlat(flattend));
