const houses = [{
        code: "ST",
        name: "Stark"
    },
    {
        code: "LA",
        name: "Lannister"
    },
    {
        code: "BA",
        name: "Baratheon"
    },
    {
        code: "TA",
        name: "Targaryen"
    }
];
const housesOptions = document.getElementById('house')
for (house of houses) {
    const option = document.createElement('option');
    option.value = `${house.code}`;
    option.textContent = `${house.name}`;
    housesOptions.appendChild(option);
}
const getCharacters = houseCode => {
    switch (houseCode) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return []; // Empty array
    }
};
const houseSelect = document.getElementById('house');
houseSelect.addEventListener('change', e => {
    const houseCode = e.target.value;
    const charactersArray = getCharacters(houseCode);
    const characters = document.getElementById('characters');
    while (characters.hasChildNodes()) {
        characters.removeChild(characters.firstChild);
    }
    for (character of charactersArray) {
        const member = document.createElement('li');
        member.textContent = character;
        characters.appendChild(member);
    }
})