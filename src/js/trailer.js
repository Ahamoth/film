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

const TMDB_API_KEY = '2d95e97f255e7635245c1980eab541d3';

// =====================================================
//  WATCH MOVIE (videobalancer — оригинальная логика)
// =====================================================
export async function watchTrailer(e) {
  const trailers = await fetchTrailer(e.target.dataset.id);

  modal.classList.add('move-left');
  overflow.classList.add('move-left');
  trailerModal.classList.remove('move-right');
  trailerOverflow.classList.remove('move-right');

  document.addEventListener('keydown', closeTrailerOnEsc);
  overflow.addEventListener('click', closeTrailerOverflow);
  trailerCloseBtn.addEventListener('click', closeTrailer);

  renderTrailer(trailers);
}

function renderTrailer(results) {
  trailerDiv.innerHTML = `
<iframe src="https://franko.uacdn.online/show/imdb/${results}"  width="840" height="560" frameborder="0" allowfullscreen></iframe>`;
}

async function fetchTrailer(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    return result.data.imdb_id;
  } catch (error) {
    console.log(error);
  }
}

// =====================================================
//  WATCH TRAILER (YouTube — новая логика)
// =====================================================
export async function watchYoutubeTrailer(e) {
  const btn = e.target.closest('.modal__btn-trailer') || e.target;
  const id = btn.dataset.id;
  const videoKey = await fetchYoutubeKey(id);

  if (!videoKey) {
    alert('Trailer not available for this movie.');
    return;
  }

  modal.classList.add('move-left');
  overflow.classList.add('move-left');
  trailerModal.classList.remove('move-right');
  trailerOverflow.classList.remove('move-right');

  document.addEventListener('keydown', closeTrailerOnEsc);
  overflow.addEventListener('click', closeTrailerOverflow);
  trailerCloseBtn.addEventListener('click', closeTrailer);

  trailerDiv.innerHTML = `
<iframe src="https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0"  width="840" height="560" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

async function fetchYoutubeKey(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=en-US`
    );
    const videos = result.data.results || [];
    const trailer =
      videos.find(v => v.site === 'YouTube' && v.type === 'Trailer' && v.official) ||
      videos.find(v => v.site === 'YouTube' && v.type === 'Trailer') ||
      videos.find(v => v.site === 'YouTube' && v.type === 'Teaser');
    return trailer ? trailer.key : null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Обработчик новой кнопки (делегирование — не нужно править modal.js)
document.addEventListener('click', e => {
  const btn = e.target.closest('.modal__btn-trailer');
  if (btn) watchYoutubeTrailer(e);
});

// =====================================================
//  SHARED CLOSE LOGIC (без изменений)
// =====================================================
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
