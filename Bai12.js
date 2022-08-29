const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
function differentArr(arr1, arr2) {
    return arr1.reduce((acc, curr) => {
        (arr2.indexOf(curr) === -1) ? acc.push(curr) : acc;
        return acc;
    }, [])
}
console.log(differentArr(arr1, arr2));
