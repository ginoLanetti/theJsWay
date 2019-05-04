const maxOfValues = () => {
    const values = [3, 11, 7, 2, 9, 10];
    let max = 0;
    values.forEach(value => {
        if (value > max) {
            max = value;
        }
    });
    return max;
}
console.log(maxOfValues());