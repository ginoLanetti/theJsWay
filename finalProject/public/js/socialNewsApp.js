const submitButton = document.getElementById('submitButton');
const content = document.getElementById('content');
const displayLink = (link) => {
    const linkTitle = document.createElement('a');
    linkTitle.href = `${link.url}`;
    linkTitle.textContent = `${link.title}`;
    linkTitle.classList.add('link__title');
    const linkUrl = document.createElement('span');
    linkUrl.textContent = `${link.url}`;
    linkUrl.classList.add('link__url');
    const linkAuthor = document.createElement('span');
    linkAuthor.textContent = `${link.author}`;
    linkAuthor.classList.add('link__author');
    const linkHeadline = document.createElement('h4');
    linkHeadline.appendChild(linkTitle);
    linkHeadline.appendChild(linkUrl);
    linkHeadline.classList.add('link__headline');
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
            console.error('GETTING LINKS UNSUCCESSFUL');
        });
}
const displayMessage = (message) => {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('messageDiv');
    const responseMessageText = document.createElement('h4');
    responseMessageText.textContent = message;
    messageDiv.appendChild(responseMessageText);
    content.insertAdjacentElement('afterbegin', messageDiv);
    const removeMessage = () => {
        content.removeChild(messageDiv);
        clearInterval(intervalId);
    }
    const intervalId = setInterval(removeMessage, 2000);
}
const submitForm = event => {
        event.preventDefault();
        const title = document.getElementById('title');
        const author = document.getElementById('author');
        const url = document.getElementById('url');
        const urlDoesntStartWith = (beginning) =>{
            return !(url.value.startsWith(beginning));
        }
        if (url.value && title.value && author.value) {
            if ((urlDoesntStartWith('http://')) || (urlDoesntStartWith('https://'))) {
                url.value = `http://${url.value}`;
            }
            while (content.firstChild) {
                content.removeChild(content.firstChild);
            }
            const formData = new FormData(event.target);
            fetch('http://localhost:3000/links', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.text())
                .then(result => {
                    displayMessage(result);
                    getLinks();
                })
                .catch(err => {
                    console.error('POSTING FORM UNSUCCESSFUL');
                });
            content.removeChild(newLinkForm);
        } else {
            displayMessage('Please fill all the fields below');
        }
}
const addNewForm = () => {
    const existingForms = document.getElementsByClassName('linkInputs');
    while (existingForms.length > 0) {
        content.removeChild(existingForms[0]);
    }
    const title = document.createElement('input');
    title.name = 'title';
    title.type = 'text';
    title.placeholder = 'Title';
    title.id = 'title';
    title.classList.add('linkInputs__title');
    const url = document.createElement('input');
    url.name = 'url';
    url.type = 'text';
    url.placeholder = 'URL';
    url.id = 'url';
    url.classList.add('linkInputs__url')
    const author = document.createElement('input');
    author.name = 'author';
    author.type = 'text';
    author.placeholder = 'Author';
    author.id = 'author';
    author.classList.add('linkInputs__author')
    const addButton = document.createElement('input');
    addButton.type = 'submit'
    addButton.value = 'Add Link';
    addButton.classList.add('linkInputs__button')
    const newLinkForm = document.createElement('form');
    newLinkForm.classList.add('linkInputs');
    newLinkForm.appendChild(title);
    newLinkForm.appendChild(url);
    newLinkForm.appendChild(author);
    newLinkForm.appendChild(addButton);
    content.insertAdjacentElement('afterbegin', newLinkForm);
    document.querySelector('form').addEventListener('submit', submitForm);
}
window.addEventListener('load', getLinks);
submitButton.addEventListener('click', addNewForm);