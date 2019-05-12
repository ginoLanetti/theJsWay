document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    console.log('odpala sie')
    const formData = new FormData(e.target);
    fetch('https://thejsway-server.herokuapp.com/articles', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            const confirmation = document.createElement('p');
            confirmation.innerHTML = result;
            document.querySelector('body').appendChild(confirmation);
        })
        .catch(err => {
            console.error(err.message);
        });
      
})