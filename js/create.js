function counter() {
  const counterQuestion = document.querySelector(
    '[data-js="counter-question"]'
  );
  const counterAnswer = document.querySelector('[data-js="counter-answer"]');

  const inputQuestion = document.querySelector('[data-js="input-question"]');
  const inputAnswer = document.querySelector('[data-js="input-answer"]');
  const maxCharacters = 300;

  inputQuestion.addEventListener('input', () => {
    if (inputQuestion.value.length <= maxCharacters) {
      counterQuestion.textContent = `${inputQuestion.value.length} /${maxCharacters}`;
    }
  });

  inputAnswer.addEventListener('input', () => {
    if (inputAnswer.value.length <= maxCharacters) {
      counterAnswer.textContent = `${inputAnswer.value.length} /${maxCharacters}`;
    }
  });
}

export default counter;
