const sumOfValues = () => {
    const values = [3, 11, 7, 2, 9, 10];
    let sum = 0;
    values.forEach(value => {
        sum += value;
    });
    return sum;
}
console.log(sumOfValues());