let initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2", },
    { age: 20 },
    { name: "Hoang2", age: 18 }
]
function getAverageAge(arr) {
    let total = arr.reduce((output, item) => {
        if ("age" in item) {
            x = output + item.age;
        }
        return x;
    }, 0)
    return total;
}
console.log(getAverageAge(initArray));
