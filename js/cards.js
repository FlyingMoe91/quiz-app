function allCards() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach(card => {
    const bookmark = card.querySelector('[data-js="bookmark"]');
    const answerBox = card.querySelector('[data-js=answer]');
    const answerButton = card.querySelector('[data-js=showAnswer');
    const showShow = card.querySelector('[data-js="show"]');
    const showHide = card.querySelector('[data-js="hide"]');

    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--selected');
    });

    answerButton.addEventListener('click', () => {
      answerBox.classList.toggle('hidden-answer');
      showShow.classList.toggle('hidden');
      showHide.classList.toggle('hidden');
    });
  });
}

export default allCards;
