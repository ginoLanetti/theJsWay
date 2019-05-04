let hr = Number(prompt('Please type your current time in 24h format(hours, minutes, seconds separately), so I can show you which time it will be after a second. Let\'s start with an hour...')); 
let min = Number(prompt('...now minutes...'));
let sec = Number(prompt('...and seconds'));

if ((sec < 59) && (min < 60) && (hr < 25)) {
    sec ++; 
} else if ((sec = 59) && (min < 60) && (hr < 25)) {
    sec = 0;
    if (min < 59){
        min ++;
    } else if (min = 59) {
        min = 0;
        if (hr < 23){
            hr ++;
        } else if (hr = 59) {
            hr = 0;
        }
    }
} else {
    alert('Not a valid time format');
}

// adding zeroes to single-digit numbers (just a decoration)
const addZeroes = (time) => {
    if (time.length < 2){
        time = '0'+time;
    }
    return time;
}
hr = addZeroes(String(hr));
min = addZeroes(String(min));
sec = addZeroes(String(sec));

alert(`It is ${hr} ${min} ${sec}`);