const arr = [2, 1, 0, 3, 2, 1, 2];
function deleteElement(arr) {
    return arr.reduce((acc, curr) => {
        if (acc.indexOf(curr) === -1) {
            acc.push(curr);
        }
        return acc;
    }, [])
}
console.log(deleteElement(arr));
