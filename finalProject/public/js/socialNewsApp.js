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
document.addEventListener('load', e => {
    fetch('https://localhost:3000/articles')
        .then(response => response.json())
        .then(links => {
            links.forEach(link => {
                displayLink(link);
            });
        })
        .catch(err => {
            console.error(err.message);
        });
});
/* FUNCTION ADDING NEW ARTICLE
    if (!(url.value.startsWith(`http://`))) {
        url.value = `http://${url.value}`;
    }
    if (url.value && title.value && author.value) {
        links.push({
            title: title.value,
            url: url.value,
            author: author.value
        })
        content.removeChild(articleInputs);
        displayLink(links[links.length - 1]);
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
*/
const addArticleForm = () => {
    const existingForms = document.getElementsByClassName('linkInputs');
    if (existingForms.length > 0){
        content.removeChild(existingForms[0]);
    }
    const title = document.createElement('input');
    title.placeholder = 'Title';
    title.classList.add('articleInputs__title');
    const url = document.createElement('input');
    url.placeholder = 'URL';
    url.classList.add('articleInputs__url')
    const author = document.createElement('input');
    author.placeholder = 'Author';
    author.classList.add('articleInputs__author')
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Link';
    addButton.classList.add('articleInputs__button')
    const articleInputs = document.createElement('form');
    articleInputs.classList.add('articleInputs');
    articleInputs.appendChild(title);
    articleInputs.appendChild(url);
    articleInputs.appendChild(author);
    articleInputs.appendChild(addButton);
    content.insertAdjacentElement('afterbegin', articleInputs);
addButton.addEventListener('click', e => {/*function adding new article*/})
}
submitButton.addEventListener('click', addArticleForm);