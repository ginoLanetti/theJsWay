const square = x => x * x
const square10 = () => {
    for (i = 0; i < 11; i++) {
        console.log(i * i);
    }
}
console.log(square(0)); // Must show 0
console.log(square(2)); // Must show 4
console.log(square(5)); // Must show 25
square10();