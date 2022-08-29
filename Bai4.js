let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
if (styles.length % 2 === 1) {
    styles.splice(1, Math.floor((styles.length / 2)), "Classics");
}
console.log(styles);
styles.splice(0, 1);
console.log(styles);
styles.unshift("Rap", "Reagae");
console.log(styles);

