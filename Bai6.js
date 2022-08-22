function filterRangeInPlace(arr, a, b) {
    if (arr.indexOf(a) < arr.indexOf(b)) {
        console.log(arr.slice(arr.indexOf(a), arr.indexOf(b)+1));
    }
}

filterRangeInPlace([3,4,6,2,1,5], 4, 5);