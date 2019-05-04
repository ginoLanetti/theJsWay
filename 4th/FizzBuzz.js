
for (let i = 1; i < 101; i++){
    const Fizz = i % 3 === 0;
    const Buzz = i % 5 === 0;
    if (Fizz && Buzz){
        console.log('FizzBuzz');
    } else if (Fizz) {
        console.log(' Fizz');
    } else if (Buzz){
        console.log(' Buzz');
    } else{
        console.log(i);
    }
}

/* alternative

for (let i = 1;i < 101; i++) {
  let message = ''
  if (!(i % 3)) {
    message += 'Fizz'
  }
  if (!(i % 5)) {
  	message += 'Buzz'
  }
  console.log(message || i);
}

*/