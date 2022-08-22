function camalize(str) {
    return str.split("-").map(function (word, index) {
        if (index == 0) {
            return word.toLowerCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join("");
}

console.log(camalize("background-color"));
console.log(camalize("list-style-image"));
console.log(camalize("-webkit-transition"));
