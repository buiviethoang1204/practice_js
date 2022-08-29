const arr = [12, 45, 21, 65, 38, 76, 108, 43];
const maxArr = arr.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
})
const minArr = arr.reduce((acc, curr) => {
    return curr < acc ? curr : acc;
})
console.log(maxArr);
console.log(minArr);
