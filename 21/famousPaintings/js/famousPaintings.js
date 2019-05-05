fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
    .then(response => response.json())
    .then(paintings => {
        paintings.forEach(painting => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${painting.name}</td><td>${painting.year}</td><td>${painting.artist}</td>`;
            document.getElementById('paintings').appendChild(tr);
        });
    })
    .catch(err => console.error(err.message))