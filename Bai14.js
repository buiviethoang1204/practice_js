const arr = [0, 1, 1, 2, 2, 2];
const result = arr.reduce((acc, curr) => {
    if (acc[curr] = (acc[curr] || 0) + 1) {
        return acc;
    }
}, {})
console.log(result);
