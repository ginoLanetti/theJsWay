const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const ball = document.getElementById('ball');
const ballWidth = parseFloat(getComputedStyle(ball).width);
const endPosition = window.innerWidth - 15;
let direction = 1;
const bounceBall = () => {
    const currentPosition = parseFloat(getComputedStyle(ball).left);
    if (direction === 1) {
        if ((ballWidth + currentPosition) <= endPosition) {
            ball.style.left = `${currentPosition + 5}px`;
            bounceAnimation = requestAnimationFrame(bounceBall);
        } else {
            direction = -1;
            bounceAnimation = requestAnimationFrame(bounceBall);
        }
    } else if (direction === -1) {
        if (currentPosition > 0) {
            ball.style.left = `${currentPosition - 5}px`;
            bounceAnimation = requestAnimationFrame(bounceBall);
        } else {
            direction = 1;
            bounceAnimation = requestAnimationFrame(bounceBall);
        }
    }
}
startButton.addEventListener('click', e => {
    bounceAnimation = requestAnimationFrame(bounceBall);
    stopButton.removeAttribute('disabled');
    startButton.setAttribute('disabled', '');
});
stopButton.addEventListener('click', e => {
    ball.style.left = 0;
    cancelAnimationFrame(bounceAnimation);
    startButton.removeAttribute('disabled');
    stopButton.setAttribute('disabled', '');
    startButton.addEventListener('click', startAnimation);
});