const arr = [0, 1, 1, 2, 2, 2];
const result = arr.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc;
    
}, {})
const count = arr.reduce((acc, curr) => {
    curr in acc ? acc[curr] += 1 : acc[curr] = 1;
    return acc;
}, {})
console.log(result);
console.log(count);
