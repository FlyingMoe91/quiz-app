function allCards() {
  const cards = document.querySelectorAll('[data-js="card"]');

  cards.forEach(card => {
    const bookmark = card.querySelector('[data-js="bookmark"]');

    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--selected');
    });
  });
}

export default allCards;
