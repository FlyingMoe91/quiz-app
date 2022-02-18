const answerBox1 = document.querySelector('[data-js=answer1]');
const answerButton1 = document.querySelector('[data-js=showAnswer1');
const showShow = document.querySelector('[data-js="show"]');
const showHide = document.querySelector('[data-js="hide"]');

function showAnswer() {
  answerButton1.addEventListener('click', () => {
    answerBox1.classList.toggle('hidden-answer');
    showShow.classList.toggle('hide');
    showHide.classList.toggle('hide');
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
}

export default showAnswer;
