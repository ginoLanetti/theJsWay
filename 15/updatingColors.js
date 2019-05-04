//Updating colors

const textColor = prompt('Type a new paragraph text color');
const bgColor = prompt('Type a new paragraph background color');
const paragraphs = Array.from(document.getElementsByTagName('div'));
paragraphs.forEach(paragraph => {
    paragraph.style.color += textColor;
    paragraph.style.backgroundColor += bgColor;
});