let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
styles.splice(1,1,"Classics");
console.log(styles);
styles.splice(0,1);
console.log(styles);
styles.unshift("Rap", "Reagae");
console.log(styles);