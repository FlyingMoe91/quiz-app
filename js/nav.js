const buttonHome = document.querySelector('[data-nav="home"]');
const buttonBookmarks = document.querySelector('[data-nav="bookmarks"]');
const buttonCreate = document.querySelector('[data-nav="create"]');
const buttonProfile = document.querySelector('[data-nav="profile"]');

const pageHome = document.querySelector('[data-page="home"]');
const pageBookmarks = document.querySelector('[data-page="bookmarks"]');
const pageCreate = document.querySelector('[data-page="create"]');
const pageProfile = document.querySelector('[data-page="profile"]');

function nav() {
  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.add('footer-active');
    buttonBookmarks.classList.remove('footer-active');
    buttonCreate.classList.remove('footer-active');
    buttonProfile.classList.remove('footer-active');
  });

  buttonBookmarks.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('footer-active');
    buttonBookmarks.classList.add('footer-active');
    buttonCreate.classList.remove('footer-active');
    buttonProfile.classList.remove('footer-active');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('footer-active');
    buttonBookmarks.classList.remove('footer-active');
    buttonCreate.classList.add('footer-active');
    buttonProfile.classList.remove('footer-active');
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');

    buttonHome.classList.remove('footer-active');
    buttonBookmarks.classList.remove('footer-active');
    buttonCreate.classList.remove('footer-active');
    buttonProfile.classList.add('footer-active');
  });
}

export default nav;
