const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
];
const countryInput = document.getElementById('country');
const suggestions = document.getElementById('suggestions');
const suggestionsNotEmpty = suggestions.hasChildNodes();
countryInput.addEventListener('input', e => {
    while (suggestionsNotEmpty) {
        suggestions.removeChild(suggestions.firstChild);
    }
    suggestions.classList.remove('active'); // removing border from empty suggestions div
    for (country of countryList) {
        if (country.toLowerCase().startsWith(e.target.value)) {
            const suggestion = document.createElement('div');
            suggestion.textContent = country;
            suggestion.classList.add('suggestion');
            suggestions.appendChild(suggestion);
            suggestion.addEventListener('click', e => {
                countryInput.value = suggestion.textContent;
                while (suggestionsNotEmpty) {
                    suggestions.removeChild(suggestions.firstChild);
                }
                suggestions.classList.remove('active');
            })
        }
        if (suggestionsNotEmpty) {
            suggestions.classList.add('active');
        }
    }
})
window.addEventListener('click', e => {
    while (suggestions.hasChildNodes()) {
        suggestions.removeChild(suggestions.firstChild);
        suggestions.classList.remove('active');
    }
});

/* need to remove this line from book's proposed css from #suggestions and add it to another class called "active":
 border: 1px solid black;
 */