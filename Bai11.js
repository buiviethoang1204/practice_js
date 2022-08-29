const arr = [1, 2, 3, 4, 5];
function chunkArr(arr, chunkSize) {
    return arr.reduce((acc, curr, index) => {
        let chunkIndex = Math.floor(index/chunkSize);
        if (!acc[chunkIndex]) {
            acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(curr);
        return acc;
    }, [])
}
console.log(chunkArr(arr, 2));
