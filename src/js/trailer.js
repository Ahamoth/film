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
//  WATCH MOVIE (видеобалансер — оригинальная логика)
// =====================================================
export async function watchTrailer(e) {
  const imdbId = await fetchImdbId(e.target.dataset.id);

  if (!imdbId) {
    alert('Видео для этого фильма недоступно.');
    return;
  }

  openTrailerOverlay();

  trailerDiv.innerHTML = `
<iframe src="https://franko.uacdn.online/show/imdb/${imdbId}" width="840" height="560" frameborder="0" allowfullscreen></iframe>`;
}

async function fetchImdbId(id) {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_API_KEY}`
    );
    return result.data.imdb_id;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// =====================================================
//  WATCH TRAILER (YouTube — новая логика, с ru/uk)
// =====================================================
export async function watchYoutubeTrailer(e) {
  const videoKey = await fetchYoutubeKey(e.target.dataset.id);

  if (!videoKey) {
    alert('Трейлер для этого фильма не найден.');
    return;
  }

  openTrailerOverlay();

  trailerDiv.innerHTML = `
<iframe src="https://www.youtube.com/embed/${videoKey}?autoplay=1&rel=0" width="840" height="560" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}

async function fetchYoutubeKey(id) {
  try {
    // 🔑 include_video_language — ключевой параметр для ru/uk
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${TMDB_API_KEY}&language=ru-RU&include_video_language=ru,uk,en`
    );

    const videos = result.data.results || [];

    // Приоритет: официальный трейлер → любой трейлер → тизер
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

// =====================================================
//  OPEN / CLOSE OVERLAY (общая логика)
// =====================================================
function openTrailerOverlay() {
  modal.classList.add('move-left');
  overflow.classList.add('move-left');
  trailerModal.classList.remove('move-right');
  trailerOverflow.classList.remove('move-right');

  // ⚠️ НЕ добавляем обработчик на trailerCloseBtn здесь —
  // он может быть null. Вместо этого используем делегирование.
}

function closeTrailer() {
  trailerModal.classList.add('move-right');
  trailerOverflow.classList.add('move-right');
  modal.classList.remove('move-left');
  overflow.classList.remove('move-left');

  document.removeEventListener('keydown', closeTrailerOnEsc);

  trailerModal.addEventListener('transitionend', stopVideo);
}

function stopVideo() {
  trailerDiv.innerHTML = '';
  trailerModal.removeEventListener('transitionend', stopVideo);
}

function closeTrailerOnEsc(e) {
  if (e.code === 'Escape') closeTrailer();
}

// =====================================================
//  ГЛОБАЛЬНЫЕ ОБРАБОТЧИКИ (делегирование)
// =====================================================

// 🔹 Закрытие по клику на фон (overlay)
document.addEventListener('click', e => {
  // Если кликнули именно по фону трейлера (не по контенту)
  if (e.target === trailerOverflow) {
    closeTrailer();
  }
});

// 🔹 Закрытие по клику на крестик (работает при любом селекторе)
document.addEventListener('click', e => {
  // Ищем ближайший элемент с классом, который используется для крестика.
  // ⚠️ Замените '.trailer-close-btn' на РЕАЛЬНЫЙ класс или id вашей кнопки-крестика.
  const closeBtn = e.target.closest('.trailer-close-btn');
  if (closeBtn) {
    closeTrailer();
  }
});

// 🔹 Обработчик новой кнопки «watch trailer»
document.addEventListener('click', e => {
  const btn = e.target.closest('.modal__btn-trailer');
  if (btn) {
    watchYoutubeTrailer(e);
  }
});
