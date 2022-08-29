let menu = {
    with: 200,
    height: 300,
    name: "Bui Viet Hoang"
}
function multiplyNumeric(obj) {
    for(let objELement in obj) {
        if(Number.isInteger(obj[objELement])) {
            obj[objELement]*=2;
        }
    }
}
multiplyNumeric(menu);
console.log(menu);
