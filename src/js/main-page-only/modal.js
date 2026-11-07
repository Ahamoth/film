import { watchTrailer, watchYoutubeTrailer } from '../trailer';
import { refs } from '../refs';
import Notiflix from 'notiflix';
import { renderModal } from '../render-modal';

const {
  allCardsSection,
  modal,
  overflow,
  closeBtn,
  innerModal,
  cursor,
  body,
} = refs;

const queueJSON = localStorage.getItem('queue');
const watchedJSON = localStorage.getItem('watched');
let queue = JSON.parse(queueJSON) || [];
let watched = JSON.parse(watchedJSON) || [];

allCardsSection.addEventListener('click', showModal);

function updateMoviesList() {
  const allMoviesListFromStorage = localStorage.getItem('currentFilmList');
  return JSON.parse(allMoviesListFromStorage);
}

export function showModal(e) {
  if (e.currentTarget !== e.target) {
    modal.classList.remove('hidden-modal');
    overflow.classList.remove('hidden-modal');
    allCardsSection.removeEventListener('click', showModal);
    document.addEventListener('keydown', closeModalOnEsc);
    closeBtn.addEventListener('click', closeModal);
    overflow.addEventListener('click', closeModalOverflow);

    const id =
      e.target.nodeName === 'DIV'
        ? e.target.dataset.id
        : e.target.closest('div').dataset.id;
    createModal(id);

    const top = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${top}px`;
  }
}

function closeModalOverflow(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function closeModalOnEsc(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function closeModal() {
  modal.classList.add('hidden-modal');
  overflow.classList.add('hidden-modal');
  allCardsSection.addEventListener('click', showModal);
  document.removeEventListener('keydown', closeModalOnEsc);
  closeBtn.removeEventListener('click', closeModal);
  overflow.removeEventListener('click', closeModalOverflow);

  body.style.position = '';
  body.style.top = '';
}

function createModal(id) {
  const currentList = updateMoviesList();
  const rendered = renderModal(currentList, id, watched, queue);
  innerModal.innerHTML = rendered[0];
  addListeners(rendered[1], rendered[2]);
}

function addListeners(isInQueue, isInWatched) {
  const watchedBtn = document.querySelector('.modal__btn-watched');
  const queueBtn = document.querySelector('.modal__btn-queue');
  const watchMovieBtn = document.querySelector('.modal__btn-watch-trailer');
  const watchTrailerBtn = document.querySelector('.modal__btn-trailer');

  if (isInQueue) {
    queueBtn.addEventListener('click', removeFromQueue);
  } else {
    queueBtn.addEventListener('click', addToQueue);
  }

  if (isInWatched) {
    watchedBtn.addEventListener('click', removeFromWatched);
  } else {
    watchedBtn.addEventListener('click', addToWatched);
  }

  if (watchMovieBtn) {
    watchMovieBtn.addEventListener('click', watchTrailer);
  }

  if (watchTrailerBtn) {
    watchTrailerBtn.addEventListener('click', watchYoutubeTrailer);
  }

  [watchMovieBtn, watchTrailerBtn, queueBtn, watchedBtn, closeBtn].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('mouseover', () => cursor.classList.add('hover'));
    btn.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}

// ------- storage handlers (стандартная логика Filmoteka) -------

function addToWatched(e) {
  const id = e.target.dataset.id;
  const currentList = updateMoviesList();
  const film = currentList[id];
  if (!watched.find(movie => movie.id === film.id)) {
    watched.push(film);
    localStorage.setItem('watched', JSON.stringify(watched));
  }
  e.target.textContent = 'remove from watched';
  e.target.removeEventListener('click', addToWatched);
  e.target.addEventListener('click', removeFromWatched);
}

function removeFromWatched(e) {
  const id = e.target.dataset.id;
  const currentList = updateMoviesList();
  const film = currentList[id];
  watched = watched.filter(movie => movie.id !== film.id);
  localStorage.setItem('watched', JSON.stringify(watched));
  e.target.textContent = 'add to watched';
  e.target.removeEventListener('click', removeFromWatched);
  e.target.addEventListener('click', addToWatched);
}

function addToQueue(e) {
  const id = e.target.dataset.id;
  const currentList = updateMoviesList();
  const film = currentList[id];
  if (!queue.find(movie => movie.id === film.id)) {
    queue.push(film);
    localStorage.setItem('queue', JSON.stringify(queue));
  }
  e.target.textContent = 'remove from queue';
  e.target.removeEventListener('click', addToQueue);
  e.target.addEventListener('click', removeFromQueue);
}

function removeFromQueue(e) {
  const id = e.target.dataset.id;
  const currentList = updateMoviesList();
  const film = currentList[id];
  queue = queue.filter(movie => movie.id !== film.id);
  localStorage.setItem('queue', JSON.stringify(queue));
  e.target.textContent = 'add to queue';
  e.target.removeEventListener('click', removeFromQueue);
  e.target.addEventListener('click', addToQueue);
}

// =====================================================
//  🔹 ДЕЛЕГИРОВАННЫЙ ОБРАБОТЧИК КРЕСТИКА МОДАЛКИ
//  Работает, даже если refs.closeBtn укажет не туда
// =====================================================
document.addEventListener('click', e => {
  if (e.target.closest('.modal__close-btn')) {
    closeModal();
  }
});
