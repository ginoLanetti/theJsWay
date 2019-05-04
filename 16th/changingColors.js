//*Changing colors

const changeColor = e => {
    const paragraphs = Array.from(document.getElementsByTagName('div'));
    switch (e.keyCode) {
        case 114:
            paragraphs.forEach(paragraph => {
                paragraph.style.backgroundColor = 'red';
            });
            break;
        case 121:
            paragraphs.forEach(paragraph => {
                paragraph.style.backgroundColor = 'yellow';
            });
            break;
        case 103:
            paragraphs.forEach(paragraph => {
                paragraph.style.backgroundColor = 'green';
            });
            break;
        case 98:
            paragraphs.forEach(paragraph => {
                paragraph.style.backgroundColor = 'blue';
            });
            break;
        default:
            console.log('key not valid')
            break;
    }
}
document.addEventListener('keypress', changeColor);