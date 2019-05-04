//Mini-dictionary

const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
}, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
}, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
}];
let wordsHTML = '';
words.forEach(word => {
    wordsHTML += `<dl><dt><strong>${word.term}</strong></dt><dd>${word.definition}</dd></dl>`;
});
document.getElementById('content').innerHTML += wordsHTML;