function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (a < b) {
            if (item < a || item > b) {
                arr.splice(i, 1);
                i--;
            }
        }
        if (item < b || item > a) {
            arr.splice(i, 1);
            i--;
        }
    }
}
arr = [3, 4, 6, 2, 1, 5];
filterRangeInPlace(arr, 3, 1);
console.log(arr);
