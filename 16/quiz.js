//Interactive quiz

const questions = [{
        statement: "2+2?",
        answer: "2+2 = 4"
    },
    {
        statement: "In which year did Christopher Columbus discover America?",
        answer: "1492"
    },
    {
        statement: "What occurs twice in a lifetime, but once in every year, twice in a we\
    ek but never in a day?",
        answer: "The E letter"
    }
];
let answers = [];
for (i = 0; i < questions.length; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.id = `question_${i}`;
    questionDiv.innerHTML = `<h3> Question ${i+1}: ${questions[i].statement} </h3></br><button id="button_${i}"> Show answer </button>`;
    answers.push(`${questions[i].answer}`);
    document.getElementById('content').appendChild(questionDiv);
}
const buttons = document.querySelectorAll('#content button');
for (j = 0; j < buttons.length; j++) {
    const question = document.getElementById(`question_${j}`);
    const button = document.getElementById(`button_${j}`);
    const answer = document.createElement('p');
    answer.textContent = `${answers[j]}`;
    button.addEventListener('click', e => {
        question.replaceChild(answer, button);
    })
}