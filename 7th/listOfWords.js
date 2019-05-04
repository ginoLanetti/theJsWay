words = [];
words.push(prompt('type "the word" to stop this madness...'));
while (words[words.length - 1].toLowerCase() !== 'stop') {
    words.push(prompt('type "the word" to stop this madness...'));
}
words.forEach(word => {
    console.log(word);
});