//Newspaper list

const newspapers = ["https://www.nytimes.com", "https://www.washingtonpost.co\
m", "http://www.economist.com"];
let newspapersHTML = '';
newspapers.forEach(newspaper => {
    let linkBrackets = `<a href ="${newspaper}">${newspaper}</a><br>`;
    newspapersHTML += linkBrackets;
});
document.getElementById('content').innerHTML += newspapersHTML;