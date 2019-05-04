const wordWrittenBackwards = (checkedWord) => {
    let wordBackwardsArray = [];
    for (i = checkedWord.length - 1; i--; i < 1) {
        wordBackwardsArray.push(checkedWord[i]);
    }
    const wordBackwards = wordBackwardsArray.join('');
    return wordBackwards;
}
const word = prompt('Type a word below.').toLowerCase();
const howManyVowels = (checkedWord) => {
    const vowels = 'aeiou';
    let vowelsNum = 0;
    for (letter of checkedWord) {
        if (vowels.indexOf(letter) > -1) {
            vowelsNum++;
        }
    }
    return vowelsNum;
}
const isPalindrome = (word_one, word_two) => {
    let result = '';
    if (word_one === word_two) {
        result = 'is a palindrome';
    } else {
        result = 'is not a palindrome';
    }
    return result;
}
alert(`word ${word}/${word.toUpperCase()} is ${word.length} charcters long and contains ${howManyVowels(word)} vowel(s). It's '${wordWrittenBackwards(word)}'/'${wordWrittenBackwards(word).toUpperCase()}' when written backwards so it ${isPalindrome(word, wordWrittenBackwards(word))}.`);