for (i = 0; i < 10; i++) {
    const link = document.createElement('a');
    link.textContent = ` ${i+1} |`;
    link.setAttribute('nb', i + 1);
    link.href = '#infos';
    document.getElementById('links').appendChild(link);
}
const infos = document.getElementById('infos');
const links = Array.from(document.getElementById('links').querySelectorAll('a'));
links.forEach(link => {
    link.addEventListener('click', e => {
        infos.innerHTML = '';
        fetch(`https://swapi.co/api/planets/${link.getAttribute('nb')}/`)
            .then(response => response.json())
            .then(planet => {
                const planetClimate = planet.climate;
                const planetPopulation = planet.population;
                const planetFilmsNb = planet.films.length;
                const planetHeader = document.createElement('h3');
                let planetPara = document.createElement('p');
                planetHeader.textContent = planet.name;
                planetPara.textContent = `Climate: ${planetClimate}. Population: ${planetPopulation}. Appears in ${planetFilmsNb} movie(s)`;
                infos.appendChild(planetHeader);
                infos.appendChild(planetPara);
            })
            .catch(console.error('ERROR'));
    })
});