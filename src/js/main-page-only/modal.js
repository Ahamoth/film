import { watchTrailer, watchYoutubeTrailer } from '../trailer';
import { refs } from '../refs';
import Notiflix from 'notiflix';
import { renderModal } from '../render-modal';

const { allCardsSection, modal, overflow, closeBtn, innerModal, cursor, body } = refs;

const queueJSON = localStorage.getItem('queue');
const watchedJSON = localStorage.getItem('watched');
let queue = JSON.parse(queueJSON) || [];
let watched = JSON.parse(watchedJSON) || [];

allCardsSection.addEventListener('click', showModal);

function updateMoviesList() {
  const allMoviesListFromStorage = localStorage.getItem('currentFilmList');
  return JSON.parse(allMoviesListFromStorage);
}

function addToWatched(e) { /* ... без изменений ... */ }
function removeFromWatched(e) { /* ... без изменений ... */ }
function addToQueue(e) { /* ... без изменений ... */ }
function removeFromQueue(e) { /* ... без изменений ... */ }

export function showModal(e) {
  if (e.currentTarget !== e.target) {
    modal.classList.remove('hidden-modal');
    overflow.classList.remove('hidden-modal');
    allCardsSection.removeEventListener('click', showModal);
    document.addEventListener('keydown', closeModalOnEsc);
    closeBtn.addEventListener('click', closeModal);
    overflow.addEventListener('click', closeModalOverflow);

    const id = e.target.nodeName === 'DIV' ? e.target.dataset.id : e.target.closest('div').dataset.id;
    createModal(id);

    const top = window.scrollY;
    body.style.position = 'fixed';
    body.style.top = `-${top}px`;
  }
}

function closeModalOverflow(e) { /* ... без изменений ... */ }
function closeModalOnEsc(e) { /* ... без изменений ... */ }
function closeModal() { /* ... без изменений ... */ }

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
  const watchTrailerBtn = document.querySelector('.modal__btn-trailer'); // 🆕

  isInQueue
    ? queueBtn.addEventListener('click', removeFromQueue)
    : queueBtn.addEventListener('click', addToQueue);

  isInWatched
    ? watchedBtn.addEventListener('click', removeFromWatched)
    : watchedBtn.addEventListener('click', addToWatched);

  // Видеобалансер
  watchMovieBtn.addEventListener('click', watchTrailer);

  // 🆕 YouTube-трейлер
  if (watchTrailerBtn) {
    watchTrailerBtn.addEventListener('click', watchYoutubeTrailer);
  }

  [watchMovieBtn, watchTrailerBtn, queueBtn, watchedBtn, closeBtn].forEach(btn => {
    if (!btn) return;
    btn.addEventListener('mouseover', () => cursor.classList.add('hover'));
    btn.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
  });
}
