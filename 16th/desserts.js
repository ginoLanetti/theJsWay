//Desserts

const addDessert = () => {
    const yummy = prompt('Choose your favourive dessert.');
    document.getElementById('desserts').innerHTML += `<li>${yummy}</li>`;
    for (let bullet of document.querySelectorAll("#desserts li")) {
        bullet.addEventListener('click', e => {
            bullet.textContent = prompt('Changed your mind?');
        });
    }
};
document.getElementById('addButton').addEventListener('click', addDessert);