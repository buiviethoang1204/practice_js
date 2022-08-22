let initArray = [
    {name: "Bui", age: 25},
    {name: "Viet", age: 26},
    {name: "Hoang", age: 27},
    {name: "Bui2"},
    {age: 20},
    {name: "Hoang2", age: 18}
]

let newArr = initArray.map((item)=> {
    return item.name;
})

console.log(newArr);