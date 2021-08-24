
//todo Questions and answers initialization
const qna = [
    {
        question: 'Who developed and designed Javascript?',

        a: 'Elon Musk',
        b: 'Bill Gates',
        c: 'Brendan Eich ',
        d: 'Tim Berners-Lee',
        correct: 'c'
    },
    {
        question: 'Which is the correct way to write a comment in JavaScript?',
        a: ' {# ... #}',
        b: '<!--- .... ---!>',
        c: '// ....',
        d: '...',
        correct: 'c',
    },
    {
        question: 'How do you open a confirm window in JavaScript?',
        a: 'confirm()',
        b: 'location.confirm()',
        c: 'window.open_confirm()',
        d: 'window.new_confirm()',
        correct: 'a',
    },
    {
        question: 'How do you write anything into the web page in JavaScript?',
        a: 'window.write(...)',
        b: 'document.write(...)',
        c: 'window.page.write(...)',
        d: 'document.page.write(...)',
        correct: 'b',
    },
    {
        question: 'Which of the events occurs when the user clicks on an HTML element?',
        a: 'onchange',
        b: 'onmouseover',
        c: 'onmouseclick',
        d: 'onclick',
        correct: 'd',
    },

]
//! storing the questions and answrs
const question = document.getElementById('question');
const a = document.getElementById('a');
const b = document.getElementById('b');
const c = document.getElementById('c');
const d = document.getElementById('d');
const submit = document.getElementById('subm');
const answers = document.querySelectorAll('.answer');

const scoreshow = document.getElementById('scoreshow');

let score = 0;
let quizqn = 0;

loadQuizOn();

//? creating function for dispaly on page
function loadQuizOn() {
    const currentquiz = qna[quizqn];

    question.innerHTML = currentquiz.question;
    a.innerHTML = currentquiz.a;
    b.innerHTML = currentquiz.b;
    c.innerHTML = currentquiz.c;
    d.innerHTML = currentquiz.d;



}
//!  selecting the correct answer by user
        const checkedAns = () => {
    const answers = document.querySelectorAll('.answer');
    let answer;

    answers.forEach((selected) => {

        if (selected.checked) {
            answer = selected.id;
        }
    });
    return answer;

}

// todo deselecting the answers
    function diselectAns() {

    answers.forEach((selected) => {
        selected.checked = false;

    });
}
// ! creating score and loading another question after click on button
        submit.addEventListener('click', () => {




    const answer = checkedAns();

    if (answer) {

        if (answer === qna[quizqn].correct) {
            score += 1;    //incrementing score if correct

        }
        console.log(score);

        quizqn++;

        if (quizqn < qna.length) {
            loadQuizOn();    //loading another question
        }
        else {
            scoreshow.innerHTML = `<h3> You Scored ${score}/${qna.length} </h3>`;
        }        //displaying the score..
    }



    diselectAns();

});



