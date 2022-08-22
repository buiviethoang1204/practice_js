let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
if (styles.length % 2 === 1) {
    styles.splice(1, (styles.length/2) - 0.5, "Classics");
}
console.log(styles);
styles.splice(0,1);
console.log(styles);
styles.unshift("Rap", "Reagae");
console.log(styles);

