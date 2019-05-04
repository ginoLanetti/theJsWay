//Adding a paragraph

const listNode = document.createElement('p');
listNode.innerHTML += 'More complete <a href="https://en.wikipedia.org/wiki/List_of_programming_languages"> list </a> of languages';
document.getElementById('content').appendChild(listNode);