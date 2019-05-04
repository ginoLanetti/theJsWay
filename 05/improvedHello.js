const firstName = prompt('give me your first name');
const lastName = prompt('give me your last name');

function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
}
alert(sayHello(firstName, lastName));