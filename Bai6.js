function filterRangeInPlace(arr, a, b) {
    return arr.reduce((acc, curr) => {
        if (a < b) {
            return (curr >= a && curr <= b) ? acc.concat(curr) : acc;
        }
        return (curr >= b && curr <= a) ? acc.concat(curr) : acc;
    }, [])
}
arr = [3, 4, 6, 2, 1, 5];
console.log(filterRangeInPlace(arr, 3, 1));
