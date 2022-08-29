const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
function differentArr(arr1, arr2) {
    let result = [];
    arr1.reduce((acc, curr) => {
        if (arr2.indexOf(curr) === -1) {
            result.push(curr);
        }
    }, [])
    arr2.reduce((acc, curr) => {
        if (arr1.indexOf(curr) === -1) {
            result.push(curr);
        }
    }, [])
    return result;
}
console.log(differentArr(arr1, arr2));
