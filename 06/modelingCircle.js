const r = Number(prompt("Enter the circle radius:"));
const pi = Math.PI;
const circle = {
    area() {
        return pi * r ** 2;
    },
    circumference() {
        return 2 * pi * r;
    }
}
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);