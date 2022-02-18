const bkunselected = document.querySelector('[data-js=bookmark-unseleted]');
const bkselected = document.querySelector('[data-js=bookmark-selected]');

function bookmarked() {
  bkunselected.addEventListener('click', () => {
    bkselected.classList.toggle('hidden');
  });
}

export default bookmarked;
