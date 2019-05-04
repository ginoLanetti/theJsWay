const userValue = Number(prompt('Type first value'))
for (let i = userValue; i < userValue + 10; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);  
    }
}