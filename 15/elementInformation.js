//Information about an element

const contentHeight = getComputedStyle(document.getElementById('content')).height;
const contentWidth = getComputedStyle(document.getElementById('content')).width;
const informationHTML = document.createElement('p');
informationHTML.innerHTML = `Information about the content: <ul><li>Height: <strong>${contentHeight}</strong></li><li>Width: <strong>${contentWidth}</strong></li></ul>`;
document.getElementById('infos').appendChild(informationHTML);