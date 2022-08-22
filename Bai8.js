let initArray = [
    {name: "Bui", age: 25},
    {name: "Viet", age: 26},
    {name: "Hoang", age: 27},
    {name: "Bui2"},
    {age: 20},
    {name: "Hoang2", age: 18}
]

function getAverageAge(arr) {
    let ageArr = arr.map((item) => {
        return item.age;
    })
    let total = 0;
    ageArr.forEach((item) => {
        if (Number.isInteger(item)) {
            total += item;
        }
    })
    let avgTotal = total/ageArr.length;
    return avgTotal;
}

getAverageAge(initArray);
console.log(getAverageAge(initArray));
