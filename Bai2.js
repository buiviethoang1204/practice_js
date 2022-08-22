let salaries = {
    Bui: 1200,
    Viet: 1600,
    Hoang: 1350}

let sum = 0;
for (let i in salaries) {
    sum += salaries[i];
}
console.log(sum);