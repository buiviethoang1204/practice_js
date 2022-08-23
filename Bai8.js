let initArray = [
    { name: "Bui", age: 25 },
    { name: "Viet", age: 26 },
    { name: "Hoang", age: 27 },
    { name: "Bui2", },
    { age: 20 },
    { name: "Hoang2", age: 18 }
]
function getAverageAge(arr) {
    return arr.reduce((acc, curr) => {
        return (curr.age) ? acc + curr.age : acc;
    }, 0)
}
console.log(getAverageAge(initArray));
console.log(typeof initArray[3].age);
