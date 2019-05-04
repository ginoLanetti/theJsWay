let option = '';
const links = [];
const displayLinks = () => {
    let linksDisplay = '';
    for (i = 0; i < links.length; i++) {
        linksDisplay = linksDisplay + `${i+1}: ${links[i].title} (${links[i].url}). Author: ${links[i].author}\n`
    }
    alert(linksDisplay || 'list is empty');
}
const addLink = () => {
    const title = prompt('Add link\'s title');
    let url = prompt('Add link\'s URL');
    const author = prompt('Add your name');
    if (!(url.startsWith('http:\/\/'))) {
        url = 'http:\/\/' + url;
    }
    links.push({
        title: title,
        url: url,
        author: author
    })
}
const removeLink = () => {
    const index = Number(prompt(`Enter index of a link (between 1 and ${links.length})`));
    if (index < 1 || index > links.length) {
        alert('There is no such link index, please try again.')
    } else {
        links.splice(index - 1, 1);
        alert(`link number ${index} has been removed`)
    }
}
while (option !== '0') {
    option = prompt('Choose an option: \n 1: Show links\n 2: Add a link\n 3: Remove a link \n 0: Quit');
    switch (option) {
        case '1':
            displayLinks();
            break;
        case '2':
            addLink();
            displayLinks();
            break;
        case '3':
            removeLink();
            displayLinks();
            break;
        case '0':
            alert('See you next time! Bye!');
            break;
        default:
            alert('Please choose one of the available options');
    }
}