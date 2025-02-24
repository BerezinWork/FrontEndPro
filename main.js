let num = +prompt("Write any three-digit number");
let digits = num.toString().split("");

if(digits.length === 3) {
    let d1 = +digits[0];
    let d2 = +digits[1];
    let d3 = +digits[2];

    if(d1 === d2 && d2 === d3) {
        console.log(`All digits of the number = ${num}, are equal to each other`);
    } else if(d1 === d2 || d1 === d3 || d2 === d3) {
        console.log(`At least two digits of the number = ${num}, are equal to each other`);
    } else {
        console.log(`No one digits of the number = ${num}, are equal to each other1`);
    }
} else {
    if(digits[0] === '0') {
        console.log(`You write number with 0 digits, let's try again`);
    } else {
        console.log(`You write number with ${digits.length} digits, let's try again`);
    }
}