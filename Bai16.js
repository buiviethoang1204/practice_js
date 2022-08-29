const arr = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "GZ", name: "TYJ", age: 25 },
    { area: "SZ", name: "AAA", age: 23 },
    { area: "FS", name: "BBB", age: 21 },
    { area: "SZ", name: "CCC", age: 19 }
];
function group(arr, key) {
    return arr.reduce((acc, curr) => {
        const keyName = curr[key];
        if (!acc[keyName]) {
            acc[keyName] = []
        }
        acc[keyName].push(curr);
        return acc;
    }, {});
}
console.log(group(arr, "area"));

