const input = document.getElementById('textInput');
const content = document.getElementById('content');
const getInfo = () => {
    fetch(`https://api.github.com/users/${input.value}`)
        .then(response => response.json())
        .then(description => {
            document.getElementById('content').innerHTML= "";
            const userDiv = document.createElement('div');
            const avatar = document.createElement('img');
            avatar.src = description.avatar_url;
            const name = document.createElement('h2');
            name.textContent = description.name;
            const website = document.createElement('a');
            website.href = description.blog;
            website.textContent = 'Website';
            userDiv.appendChild(avatar);
            userDiv.appendChild(name);
            userDiv.appendChild(website);
            content.appendChild(userDiv);
            
        })
}
document.getElementById('lookupButton').addEventListener('click', getInfo);