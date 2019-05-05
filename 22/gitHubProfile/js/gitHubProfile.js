const input = document.getElementById('textInput');
const content = document.getElementById('content');
const getInfo = () => {
    fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(description => {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = '';
            const avatar = document.createElement('img');
            avatar.src = description.avatar_url;
            const name = document.createElement('h2');
            name.textContent = description.name;
            const website = document.createElement('a');
            website.href = description.blog;
            userDiv.appendChild(avatar);
            userDiv.appendChild(name);
            userDiv.appendChild(website);
            content.appendChild(userDiv);
            
        })
}
const gosciu = () => {
    console.log(`https://api.github.com/users/${input.value}`);
}
document.getElementById('lookupButton').addEventListener('click', gosciu);