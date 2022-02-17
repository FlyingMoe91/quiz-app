const answerBox1 = document.querySelector('[data-js=answer1]');
const answerButton1 = document.querySelector('[data-js=showAnswer1');

answerButton1.addEventListener('click', () => {
  answerBox1.classList.toggle('hidden-answer');
});

const answerBox2 = document.querySelector('[data-js=answer2]');
const answerButton2 = document.querySelector('[data-js=showAnswer2');

answerButton2.addEventListener('click', () => {
  answerBox2.classList.toggle('hidden-answer');
});

const answerBox3 = document.querySelector('[data-js=answer3]');
const answerButton3 = document.querySelector('[data-js=showAnswer3');

answerButton3.addEventListener('click', () => {
  answerBox3.classList.toggle('hidden-answer');
});

const answerBox4 = document.querySelector('[data-js=answer4]');
const answerButton4 = document.querySelector('[data-js=showAnswer4');

answerButton4.addEventListener('click', () => {
  answerBox4.classList.toggle('hidden-answer');
});

const bkunselected = document.querySelector('[data-js=bookmark-unseleted]');
const bkselected = document.querySelector('[data-js=bookmark-selected]');

bkunselected.addEventListener('click', () => {
  bkselected.classList.toggle('hidden');
});

const test = 'hello';
