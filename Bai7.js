let initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2" },
    { age: 20 },
    { name: "Hoang2", age: 18 }
]
function nameArr(arr) {
    return arr.reduce((output, item) => {
        if ("name" in item) {
            x = output.concat(item.name);
        }
        return x;
    }, [])
}
console.log(nameArr(initArray));
