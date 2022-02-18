const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

function bookmarked() {
  bookmarks.forEach(bookmark => {
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('card__bookmark--selected');
    });
  });
}

export default bookmarked;
