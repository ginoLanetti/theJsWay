const first = Number(prompt('type first number'));
const operation = prompt('enter proper operation symbol')
const second = Number(prompt('type second number'));

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1 - num2;
            break;
        case '*':
            return num1 * num2;
            break;
        case '/':
            return num1 / num2;
            break;
        default:
            return 'error';
            break;
    }
}
console.log(calculator(first, operation, second));