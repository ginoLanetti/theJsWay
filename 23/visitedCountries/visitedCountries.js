const visited = {
    name: 'Tom',
    countries: [{
        name: "First",
        year: 2019
    }, {
        name: 'Second',
        year: 2022
    }]
};
fetch('http://localhost:3000/api/countries', {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visited)
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err.message);
    })