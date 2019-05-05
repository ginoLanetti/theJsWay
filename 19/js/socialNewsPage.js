const submitButton = document.getElementById('submitButton');
const content = document.getElementById('content');
const links = [{
    title: 'Facebook',
    url: 'http://www.facebook.com',
    author: 'Me'
}, {
    title: 'Instagram',
    url: 'http://www.instagram.com',
    author: 'Also Me'
}];
const dispalyLink = (link) => {
    const linkTitle = document.createElement('a');
    linkTitle.href = `${link.url}`;
    linkTitle.textContent = `${link.title}`;
    linkTitle.classList.add('linkTitle');
    const linkUrl = document.createElement('span');
    linkUrl.textContent = `${link.url}`;
    linkUrl.classList.add('linkUrl');
    const linkAuthor = document.createElement('span');
    linkAuthor.textContent = `${link.author}`;
    linkAuthor.classList.add('linkAuthor');
    const linkHeadline = document.createElement('h4');
    linkHeadline.appendChild(linkTitle);
    linkHeadline.appendChild(linkUrl);
    linkHeadline.classList.add('linkHeadline');
    const linkDiv = document.createElement('div');
    linkDiv.classList.add('link');
    linkDiv.appendChild(linkHeadline);
    linkDiv.appendChild(linkAuthor);
    content.appendChild(linkDiv);
}
const addLinkInputs = () => {
    const title = document.createElement('input');
    title.placeholder = 'Title';
    title.classList.add('linkInputs__title');
    const url = document.createElement('input');
    url.placeholder = 'URL';
    url.classList.add('linkInputs__url')
    const author = document.createElement('input');
    author.placeholder = 'Author';
    author.classList.add('linkInputs__author')
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Link';
    addButton.classList.add('linkInputs__button')
    const linkInputs = document.createElement('form');
    linkInputs.classList.add('linkInputs');
    linkInputs.appendChild(title);
    linkInputs.appendChild(url);
    linkInputs.appendChild(author);
    linkInputs.appendChild(addButton);
    content.insertAdjacentElement('afterbegin', linkInputs);
    addButton.addEventListener('click', e => {
        if (!(url.value.startsWith(`http://`))) {
            url.value = `http://${url.value}`;
        }
        if (url.value && title.value && author.value) {
            links.push({
                title: title.value,
                url: url.value,
                author: author.value
            })
            content.removeChild(linkInputs);
            dispalyLink(links[links.length - 1]);
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('messageDiv');
            const messageText = document.createElement('h4')
            messageText.textContent = `The link ${title.value} has been succesfully added!`;
            messageDiv.appendChild(messageText);
            content.insertAdjacentElement('afterbegin', messageDiv);
            setInterval(h => {
                content.removeChild(messageDiv);
            }, 2000)
        } else {
            alert('your link is missing something...')
        }
    })
}
links.forEach(link => {
    dispalyLink(link);
});
submitButton.addEventListener('click', addLinkInputs);