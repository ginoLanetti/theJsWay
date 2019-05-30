const submitButton = document.getElementById('submitButton');
const content = document.getElementById('content');
const displayLink = (link) => {
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
const getLinks = () => {
    fetch('http://localhost:3000/links')
        .then(response => response.json())
        .then(links => {
            links.forEach(link => {
                displayLink(link);
            });
        })
        .catch(err => {
            console.error('GETTING LINKS ON PAGE LOAD - FUCKED UP');
        });
}
window.addEventListener('load', getLinks);
const addLinksForm = () => {
    const existingForms = document.getElementsByClassName('linkInputs');
    if (existingForms.length > 0) {
        content.removeChild(existingForms[0]);
    }
    const title = document.createElement('input');
    title.name = 'title';
    title.type = 'text';
    title.placeholder = 'Title';
    title.classList.add('linkInputs__title');
    const url = document.createElement('input');
    url.name = 'url';
    url.type = 'text';
    url.placeholder = 'URL';
    url.classList.add('linkInputs__url')
    const author = document.createElement('input');
    author.name = 'author';
    author.type = 'text';
    author.placeholder = 'Author';
    author.classList.add('linkInputs__author')
    const addButton = document.createElement('input');
    addButton.type = 'submit'
    addButton.value = 'Add Link';
    addButton.classList.add('linkInputs__button')
    const linkInputs = document.createElement('form');
    linkInputs.classList.add('linkInputs');
    linkInputs.appendChild(title);
    linkInputs.appendChild(url);
    linkInputs.appendChild(author);
    linkInputs.appendChild(addButton);
    content.insertAdjacentElement('afterbegin', linkInputs);
    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        const title = document.getElementsByClassName('linkInputs__title');
        const author = document.getElementsByClassName('linkInputs__author');
        const url = document.getElementsByClassName('linkInputs__url');
        if (!(url[0].value.startsWith(`http://`))) {
            url[0].value = `http://${url[0].value}`;
        }
        if (url[0].value && title[0].value && author[0].value) {
            const formData = new FormData(e.target);
            fetch('http://localhost:3000/links', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(result => {
                    const messageDiv = document.createElement('div');
                    messageDiv.classList.add('messageDiv');
                    const responseMessageText = document.createElement('h4');
                    responseMessageText.textContent = result;
                    messageDiv.appendChild(responseMessageText);
                    content.insertAdjacentElement('afterbegin', messageDiv);
                    const removeMessage = () => {
                        content.removeChild(messageDiv);
                        clearInterval(intervalId);
                    }
                    const intervalId = setInterval(removeMessage, 2000);
                    while (content.firstChild) {
                        content.removeChild(content.firstChild);
                    }
                    getLinks();
                })
                .catch(err => {
                    console.error('POSTING FORM - FUCKED UP');
                });
            content.removeChild(linkInputs);
        } else {
            alert('your link is missing something...')
        }
    });
}
submitButton.addEventListener('click', addLinksForm);