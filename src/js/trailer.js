import axios from 'axios';
import { refs } from './refs';

const {
  trailerOverflow,
  trailerModal,
  trailerDiv,
  trailerCloseBtn,
  modal,
  overflow,
} = refs;

const API_KEY = '2d95e97f255e7635245c1980eab541d3'; // ваш ключ из api-service.js

export async function watchTrailer(e) {
  const movieId = e.target.dataset.id;

  try {
    const videoKey = await fetchTrailer(movieId);
    if (!videoKey) {
      alert('Трейлер для этого фильма не найден.');
      return;
    }

    modal.classList.add('move-left');
    overflow.classList.add('move-left');
    trailerModal.classList.remove('move-right');
    trailerOverflow.classList.remove('move-right');

    document.addEventListener('keydown', closeTrailerOnEsc);
    overflow.addEventListener('click', closeTrailerOverflow);
    trailerCloseBtn.addEventListener('click', closeTrailer);

    renderTrailer(videoKey);
  } catch (error) {
    console.error('Ошибка при загрузке трейлера:', error);
    alert('Не удалось загрузить трейлер. Попробуйте позже.');
  }
}

function renderTrailer(videoKey) {
  trailerDiv.innerHTML = `
    <iframe
      class="trailer-iframe"
      src="https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0"
      title="YouTube trailer"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;
}

function closeTrailerOverflow(e) {
  if (e.currentTarget === e.target) closeTrailer();
}

function closeTrailerOnEsc(e) {
  if (e.code === 'Escape') closeTrailer();
}

function closeTrailer() {
  trailerModal.classList.add('move-right');
  trailerOverflow.classList.add('move-right');
  modal.classList.remove('move-left');
  overflow.classList.remove('move-left');

  document.removeEventListener('keydown', closeTrailerOnEsc);
  overflow.removeEventListener('click', closeTrailerOverflow);
  trailerCloseBtn.removeEventListener('click', closeTrailer);

  trailerModal.addEventListener('transitionend', stopVideo);
}

function stopVideo() {
  trailerDiv.innerHTML = '';
  trailerModal.removeEventListener('transitionend', stopVideo);
}

async function fetchTrailer(movieId) {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  const { data } = await axios.get(url);
  const videos = data.results || [];

  const trailer =
    videos.find(v => v.site === 'YouTube' && v.type === 'Trailer' && v.official) ||
    videos.find(v => v.site === 'YouTube' && v.type === 'Trailer') ||
    videos.find(v => v.site === 'YouTube' && v.type === 'Teaser');

  return trailer ? trailer.key : null;
}
