function circleParameters() {
    const r = Number(prompt('type your circle\'s radius'))
    const pi = Math.PI;
    const circumference = 2 * pi * r;
    const area = pi * r ** 2;
    if (isNaN(circumference) || isNaN(area)) {
        console.error('radius format not valid')
    } else {
        console.log(`circumference of your circle is ${circumference} and its area is ${area}`);
    }
}
circleParameters();