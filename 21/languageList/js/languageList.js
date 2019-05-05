fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/languages.txt")
    .then(response => response.text())
    .then(text => {
        const languages = text.split(';');
        languages.forEach (language => {
            const li = document.createElement('li');
            li.textContent = language;
            document.getElementById('languageList').appendChild(li);
        });
    })
    .catch(err => console.error(err.message))