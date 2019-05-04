const timerElement = document.querySelector('#countdown span');
const startButton = document.getElementById('startButton')
const counting = () => {
    const time = Number(timerElement.textContent);
    timerElement.textContent = time + 1;
}
const setCountingTimer = () => {
    const interval = setInterval(counting, 1000);
    startButton.textContent = 'Stop';
    startButton.removeEventListener('click', setCountingTimer);
    const stopCountingTimer = () => {
        timerElement.textContent = 0;
        startButton.textContent = 'Start';
        clearInterval(interval);
        startButton.removeEventListener('click', stopCountingTimer);
        startButton.addEventListener('click', setCountingTimer);
    } 
    startButton.addEventListener('click', stopCountingTimer);
}
startButton.addEventListener('click', setCountingTimer);