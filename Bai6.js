function filterRangeInPlace(arr, a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    return arr.reduce((acc, curr) => {
        return (curr >= min && curr <= max) ? acc.concat(curr) : acc;
    }, [])
}
arr = [3, 4, 6, 2, 1, 5];
console.log(filterRangeInPlace(arr, 1, 4));
console.log(arr);
