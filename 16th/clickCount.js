//Click Count

let clickCount = 0;
const countClicks = () => {
    clickCount++;
    document.getElementById('clickCount').innerHTML = clickCount;
}
const theButton = document.getElementById('myButton');
theButton.addEventListener('click', countClicks);
document.getElementById('deactivate').addEventListener('click', e => {
    theButton.removeEventListener('click', countClicks);
});